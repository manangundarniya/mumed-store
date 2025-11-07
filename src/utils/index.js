// src/utils/index.js

export const createPageUrl = (pageName) => {
  // Simple slug-based routing helper
  return `/${pageName.toLowerCase()}`;
};
