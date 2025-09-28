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

    const products = equipment.slice(0, 10).map(item => ({
      "@type": "Product",
      "name": item.name,
      "description": item.description,
      "brand": {
        "@type": "Brand",
        "name": item.brand
      },
      "category": item.category,
      "image": `https://farmequip-database.vercel.app${item.image}`,
      "offers": item.price ? {
        "@type": "Offer",
        "price": item.price.replace(/[^0-9]/g, ''),
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      } : undefined,
      "additionalProperty": Object.entries(item.parameters).map(([key, value]) => ({
        "@type": "PropertyValue",
        "name": key,
        "value": value
      }))
    }));

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
        "item": "https://farmequip-database.vercel.app"
      }
    ];

    if (selectedCategory) {
      breadcrumbs.push({
        "@type": "ListItem",
        "position": 2,
        "name": selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1),
        "item": `https://farmequip-database.vercel.app?category=${selectedCategory}`
      });
    }

    if (searchQuery) {
      breadcrumbs.push({
        "@type": "ListItem",
        "position": breadcrumbs.length + 1,
        "name": `Search: ${searchQuery}`,
        "item": `https://farmequip-database.vercel.app?search=${encodeURIComponent(searchQuery)}`
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