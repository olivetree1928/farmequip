// 图片缓存破坏工具
const CACHE_VERSION = '2.0.3'; // 更新这个版本号来强制刷新所有图片

/**
 * 为图片URL添加版本参数来避免缓存问题
 * @param imageUrl 原始图片URL
 * @returns 带版本参数的图片URL
 */
export const addVersionToImage = (imageUrl: string): string => {
  if (!imageUrl) return imageUrl;
  
  // 如果已经有查询参数，添加&，否则添加?
  const separator = imageUrl.includes('?') ? '&' : '?';
  return `${imageUrl}${separator}v=${CACHE_VERSION}`;
};

/**
 * 获取当前缓存版本
 */
export const getCacheVersion = (): string => {
  return CACHE_VERSION;
};