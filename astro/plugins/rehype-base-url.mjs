import { visit } from 'unist-util-visit';

/**
 * Rehype plugin to prepend base URL to absolute image paths
 * @param {Object} options - Plugin options
 * @param {string} options.base - Base URL to prepend (e.g., '/MdkCV/')
 */
export default function rehypeBaseUrl(options = {}) {
  const { base = '/' } = options;
  
  return (tree) => {
    visit(tree, 'element', (node) => {
      // Handle img tags
      if (node.tagName === 'img' && node.properties?.src) {
        const src = node.properties.src;
        // Only prepend base to absolute paths that don't already include it
        if (src.startsWith('/') && !src.startsWith(base)) {
          node.properties.src = base + src.slice(1);
        }
      }
    });
  };
}
