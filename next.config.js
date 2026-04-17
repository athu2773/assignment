const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
          pathname: "/**",
        },
      ],
    },
    allowedDevOrigins: ['192.168.31.105'],
    
  };

  module.exports = nextConfig;