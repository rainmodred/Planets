module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/earth',
        permanent: true,
      },
    ];
  },
};
