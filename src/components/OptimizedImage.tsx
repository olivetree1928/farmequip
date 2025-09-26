import React, { useState, useEffect } from 'react';

// 图片缓存管理
const imageCache = new Map<string, string>();
const preloadImage = (src: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (imageCache.has(src)) {
      resolve(src);
      return;
    }

    const img = new Image();
    img.src = src;
    img.onload = () => {
      imageCache.set(src, src);
      resolve(src);
    };
    img.onerror = reject;
  });
};

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
  loading?: 'lazy' | 'eager';
}

// 简化的占位符
const createPlaceholder = () => {
  return `data:image/svg+xml;base64,${btoa(`
    <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f3f4f6"/>
      <circle cx="200" cy="150" r="30" fill="#d1d5db" opacity="0.6"/>
      <rect x="185" y="135" width="30" height="30" fill="#9ca3af" opacity="0.8"/>
    </svg>
  `)}`;
};

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  onClick,
  loading = 'lazy'
}) => {
  const [isLoaded, setIsLoaded] = useState(imageCache.has(src));
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState(imageCache.get(src) || src);

  useEffect(() => {
    let isMounted = true;

    const loadImage = async () => {
      if (!imageCache.has(src)) {
        try {
          await preloadImage(src);
          if (isMounted) {
            setImageSrc(src);
            setIsLoaded(true);
          }
        } catch (error) {
          if (isMounted) {
            setHasError(true);
          }
        }
      }
    };

    loadImage();

    return () => {
      isMounted = false;
    };
  }, [src]);

  const placeholder = createPlaceholder();

  return (
    <div className={`relative overflow-hidden bg-gray-100 ${className}`}>
      {/* 占位符 */}
      {!isLoaded && !hasError && (
        <img
          src={placeholder}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        />
      )}
      
      {/* 错误状态 */}
      {hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <div className="text-gray-400 text-center">
            <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <p className="text-xs">Image unavailable</p>
          </div>
        </div>
      )}
      
      {/* 实际图片 */}
      {!hasError && (
        <img
          src={imageSrc}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading={loading}
          onClick={onClick}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
};

export default OptimizedImage;