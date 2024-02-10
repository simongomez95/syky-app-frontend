/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/events',
                permanent: true,
            },
        ]
    },
};

module.exports = nextConfig;
