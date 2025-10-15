module.exports = {
  async rewrites() {
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://127.0.0.1:8000/api';
    return [
      { source: '/about', destination: `${apiUrl}/about/` },
      { source: '/projects', destination: `${apiUrl}/projects/` },
      { source: '/technologies', destination: `${apiUrl}/technologies/` },
      { source: '/testimonials', destination: `${apiUrl}/testimonials/` },
      { source: '/contact', destination: `${apiUrl}/contact/` },
      { source: '/hero', destination: `${apiUrl}/hero/` },
      { source: '/footer', destination: `${apiUrl}/footer/` },
    ];
  },
};
