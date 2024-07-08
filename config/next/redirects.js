const buildRedirect = (source, destination, permanent = false) => {
  return {
    source,
    destination,
    permanent,
  };
};

const redirects = [
  /* Blog posts redirections */
  buildRedirect(
    '/blog/md-iconography-guidelines',
    'https://stories.uplabs.com/what-google-missed-in-their-guidelines-for-material-design-iconography-daf9f88000ec',
  ),
  buildRedirect('/blog/uses', '/uses'),
  buildRedirect('/inspiration', '/blog/people-websites-that-inspire'),
  /* Old static assets paths to new ones */
  buildRedirect('/assets/images/:path*', '/media/:path*'),
  buildRedirect('/static/images/:path*', '/media/:path*'),
  /* Needed for android dashboards */
  buildRedirect('/static/images/me/me.jpg', '/media/abdorizak/abdorizak.jpg'),
  /* Dashbud links */
  buildRedirect('/dashbud', 'https://dashbud.dev'),
  buildRedirect('/dashbud/:path*', 'https://dashbud.dev'),
  buildRedirect('/dashsetup', 'https://dashbud.dev'),
  buildRedirect('/dashsetup/:path*', 'https://dashbud.dev'),
  /* Other redirections */
  buildRedirect('/links', 'https://bio.abdorizak.dev'),
  buildRedirect('/contact', '/about#contact'),
  /* Dashboard aliases */
  buildRedirect('/music', '/about#activity'),
  buildRedirect('/dashboard', '/about#activity'),
  buildRedirect('/stats', '/about#activity'),
  buildRedirect('/now', '/about#activity'),
  buildRedirect('/gear', '/uses'),
  buildRedirect('/releases/:path*', '/gh-releases/:path*'),
  buildRedirect('/feed', '/feed.xml'),
  buildRedirect('/sitemap', '/sitemap.xml'),
  buildRedirect('/resume', '/share/abdorizak-Resume.pdf'),
  buildRedirect('/shop', 'https://www.shop.abdorizak.dev/nuestros-productos'),
  buildRedirect(
    '/analytics',
    'https://umami.abdorizak.dev/share/uEOUfeOMI5kda1wn/abdorizak.dev',
  ),
];

module.exports = redirects;
