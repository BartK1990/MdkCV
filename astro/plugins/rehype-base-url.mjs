import { visit } from 'unist-util-visit';

/**
 * Rehype plugin to prepend base URL to absolute image paths
 * @param {Object} options - Plugin options
 * @param {string} options.base - Base URL to prepend (e.g., '/MdkCV/')
 * @returns {Function} Rehype transformer function
 */
export default function rehypeBaseUrl(options = {}) {
  const { base = '/' } = options;
  
  // Normalize base to ensure it ends with a slash (unless it's just '/')
  const normalizedBase = base === '/' || base.endsWith('/') ? base : base + '/';
  
  return (tree) => {
    visit(tree, 'element', (node) => {
      // Handle img tags
      if (node.tagName === 'img' && node.properties?.src) {
        const src = node.properties.src;
        // Only prepend base to absolute paths that don't already start with the base
        if (src.startsWith('/') && !src.startsWith(normalizedBase)) {
          if (normalizedBase === '/') {
            // If base is '/', the src already starts with '/', so no change needed
            return;
          }
          // Remove leading slash from src since normalizedBase already ends with /
          node.properties.src = normalizedBase + src.slice(1);
        }
      }
    });
  };
}
