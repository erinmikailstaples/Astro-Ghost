import GhostContentAPI from '@tryghost/content-api';

// Initialize the Ghost API client
const api = new GhostContentAPI({
  url: import.meta.env.PUBLIC_GHOST_URL,
  key: import.meta.env.PUBLIC_GHOST_CONTENT_API_KEY,
  version: import.meta.env.PUBLIC_GHOST_API_VERSION
});

// Get all posts with their tags and authors
export async function getAllPosts() {
  return await api.posts
    .browse({
      include: ['tags', 'authors'],
      limit: 'all'
    })
    .catch(err => {
      console.error(err);
      return [];
    });
}

// Get a single post by slug
export async function getPostBySlug(slug: string) {
  return await api.posts
    .read({
      slug,
      include: ['tags', 'authors']
    })
    .catch(err => {
      console.error(err);
      return null;
    });
}

// Get all pages
export async function getAllPages() {
  return await api.pages
    .browse({
      limit: 'all'
    })
    .catch(err => {
      console.error(err);
      return [];
    });
}

// Get a single page by slug
export async function getPageBySlug(slug: string) {
  return await api.pages
    .read({
      slug
    })
    .catch(err => {
      console.error(err);
      return null;
    });
}

// Get site settings/metadata
export async function getSiteSettings() {
  return await api.settings
    .browse()
    .catch(err => {
      console.error(err);
      return null;
    });
}

// Get all tags
export async function getAllTags() {
  return await api.tags
    .browse({
      limit: 'all'
    })
    .catch(err => {
      console.error(err);
      return [];
    });
}

// Get posts with a specific tag
export async function getPostsByTag(slug: string) {
  return await api.posts
    .browse({
      filter: `tag:${slug}`,
      include: ['tags', 'authors']
    })
    .catch(err => {
      console.error(err);
      return [];
    });
} 