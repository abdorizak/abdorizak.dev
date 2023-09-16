const buildRedirect = (source, destination, permanent = true) => {
  return {
    source,
    destination,
    permanent,
  };
};

module.exports = [
  /* Blog posts redirections */
  buildRedirect(
    '/blog/md-iconography-guidelines',
    'https://stories.uplabs.com/what-google-missed-in-their-guidelines-for-material-design-iconography-daf9f88000ec',
  ),
  buildRedirect('/inspiration', '/blog/people-websites-that-inspire'),
  /* Old static assets paths to new ones */
  buildRedirect('/assets/:path*', '/static/:path*'),
  /* Needed for android dashboards */
  buildRedirect(
    '/static/images/me/me.jpg',
    '/static/images/abbdorizak/abdorizak-hd.jpg',
  ),
  /* Dashbud links */
  buildRedirect('/dashbud', 'https://dashbud.dev'),
  buildRedirect('/dashbud/:path*', 'https://dashbud.dev'),
  buildRedirect('/dashsetup', 'https://dashbud.dev'),
  buildRedirect('/dashsetup/:path*', 'https://dashbud.dev'),
  /* Other redirections */
  buildRedirect('/links', 'https://links.abdorizak.dev'),
  buildRedirect('/contact', '/about#contact'),
  /* Uses blog post aliases */
  buildRedirect('/blog/uses', '/uses'),
  buildRedirect('/gear', '/uses'),
  buildRedirect('/colophon', '/uses#colophon'),
  buildRedirect('/releases/:path*', '/gh-releases/:path*'),
  buildRedirect('/feed', '/feed.xml'),
  buildRedirect('/sitemap', '/sitemap.xml'),
  buildRedirect('/resume', '/share/abdorizak-Resume.pdf'),
  buildRedirect('/shop', 'https://www.shop.abdorizak.dev/nuestros-productos'),
];
