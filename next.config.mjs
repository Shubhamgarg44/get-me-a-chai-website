/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['shreethemes.in'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'shreethemes.in',
          port: '',
          pathname: '/techwind/layouts/assets/images/**',
        },
      ],
    },
};

export default nextConfig;
