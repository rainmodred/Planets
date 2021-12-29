module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/Earth',
        permanent: true,
      },
    ];
  },
};
