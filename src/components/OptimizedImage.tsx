import React, { useState, useRef, useEffect } from 'react';
import { addVersionToImage } from '../utils/imageUtils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
  loading?: 'lazy' | 'eager';
}

// 生成低质量占位符图片的base64数据URL
const createPlaceholder = (width: number = 400, height: number = 300) => {
  return `data:image/svg+xml;base64,${btoa(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#f3f4f6;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#e5e7eb;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)"/>
      <circle cx="${width/2}" cy="${height/2}" r="30" fill="#d1d5db" opacity="0.6"/>
      <path d="M${width/2-15} ${height/2-10} L${width/2+15} ${height/2-10} L${width/2+15} ${height/2+10} L${width/2-15} ${height/2+10} Z" fill="#9ca3af" opacity="0.8"/>
      <path d="M${width/2-8} ${height/2-5} L${width/2+8} ${height/2-5} L${width/2+5} ${height/2+5} L${width/2-5} ${height/2+5} Z" fill="#6b7280"/>
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
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(loading === 'eager');
  const [hasError, setHasError] = useState(false);
  const [imageSize, setImageSize] = useState({ width: 400, height: 300 });
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loading === 'eager') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.01, // 降低阈值，更早开始加载
        rootMargin: '100px' // 增加预加载距离
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [loading]);

  // 获取容器尺寸用于占位符
  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setImageSize({ 
        width: Math.max(rect.width || 400, 400), 
        height: Math.max(rect.height || 300, 300) 
      });
    }
  }, []);

  const placeholder = createPlaceholder(imageSize.width, imageSize.height);

  return (
    <div 
      className={`relative overflow-hidden bg-gray-100 ${className}`} 
      ref={containerRef}
    >
      {/* 始终显示的SVG占位符 - 即使在加载时 */}
      <img
        src={placeholder}
        alt=""
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        aria-hidden="true"
      />
      
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
      
      {/* 实际图片 - 更激进的优化 */}
      {isInView && !hasError && (
        <img
          ref={imgRef}
          src={addVersionToImage(src)}
          alt={alt}
          className={`relative w-full h-full object-cover transition-opacity duration-700 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading={loading}
          onClick={onClick}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          style={{
            // 强制硬件加速和优化
            transform: 'translateZ(0)',
            willChange: 'transform',
            imageRendering: 'auto',
            // 限制最大尺寸以减少内存使用
            maxWidth: '100%',
            maxHeight: '100%',
          }}
          // 图片优化属性
          decoding="async"
          fetchPriority={loading === 'eager' ? 'high' : 'low'}
        />
      )}
    </div>
  );
};

export default OptimizedImage;