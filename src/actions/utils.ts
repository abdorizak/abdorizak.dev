const PROD_ENV = 'production';

const {
  NODE_ENV = 'development',
  VERCEL_ENV = 'development',
  VERCEL_GIT_REPO_SLUG = '',
  VERCEL_GIT_REPO_OWNER = '',
  ALLOW_DB_MUTATIONS = '0',
} = process.env;

// Allow overriding via ALLOW_DB_MUTATIONS=1 for local testing.
export const canRunAction =
  ALLOW_DB_MUTATIONS === '1' ||
  ((NODE_ENV === PROD_ENV || VERCEL_ENV === PROD_ENV) &&
    VERCEL_GIT_REPO_OWNER === 'abdorizak' &&
    VERCEL_GIT_REPO_SLUG === 'abdorizak.dev');
