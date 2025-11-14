import React from 'react';
import { Equipment } from '../types/equipment';

interface SEOProps {
  equipment?: Equipment[];
  selectedCategory?: string;
  searchQuery?: string;
}

const SEO: React.FC<SEOProps> = ({ equipment, selectedCategory, searchQuery }) => {
  // Generate structured data for equipment listings
  const generateEquipmentStructuredData = () => {
    if (!equipment || equipment.length === 0) return null;

    const products = equipment.slice(0, 10).map(item => {
      const imageUrl = new URL(item.image, 'https://agrieq.farm').toString();
      const productUrl = `https://agrieq.farm/#product-${encodeURIComponent(item.id)}`;

      return {
        "@type": "Product",
        "name": item.name,
        "description": item.description,
        "brand": {
          "@type": "Brand",
          "name": item.brand
        },
        "category": item.category,
        // Use encoded absolute image URL under primary domain
        "image": imageUrl,
        // Provide additional recommended properties
        "sku": item.id,
        "url": productUrl,
        "itemCondition": "https://schema.org/NewCondition",
        // Offers block: ensure numeric price and include currency/availability
        "offers": item.price ? {
          "@type": "Offer",
          "price": parseFloat(item.price.replace(/[^0-9.]/g, '')),
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": productUrl
        } : undefined,
        "additionalProperty": Object.entries(item.parameters).map(([key, value]) => ({
          "@type": "PropertyValue",
          "name": key,
          "value": value
        }))
      };
    });

    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": selectedCategory ? `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Equipment` : "Agricultural Equipment",
      "description": `Professional ${selectedCategory || 'agricultural'} equipment specifications and technical data`,
      "numberOfItems": equipment.length,
      "itemListElement": products.map((product, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": product
      }))
    };
  };

  // Generate breadcrumb structured data
  const generateBreadcrumbData = () => {
    const breadcrumbs = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://agrieq.farm"
      }
    ];

    if (selectedCategory) {
      breadcrumbs.push({
        "@type": "ListItem",
        "position": 2,
        "name": selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1),
        "item": `https://agrieq.farm?category=${encodeURIComponent(selectedCategory)}`
      });
    }

    if (searchQuery) {
      breadcrumbs.push({
        "@type": "ListItem",
        "position": breadcrumbs.length + 1,
        "name": `Search: ${searchQuery}`,
        "item": `https://agrieq.farm?search=${encodeURIComponent(searchQuery)}`
      });
    }

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs
    };
  };

  const equipmentData = generateEquipmentStructuredData();
  const breadcrumbData = generateBreadcrumbData();

  return (
    <>
      {equipmentData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(equipmentData)
          }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData)
        }}
      />
    </>
  );
};

export default SEO;