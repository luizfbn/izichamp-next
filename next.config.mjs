/** @type {import('next').NextConfig} */
const nextConfig = {
	// reactStrictMode: false,
	webpack: (config) => {
		config.module.rules.push({
			test: /\.svg$/i,
			use: ['@svgr/webpack'],
		});
		return config;
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'raw.communitydragon.org',
			},
			{
				protocol: 'http',
				hostname: 'ddragon.leagueoflegends.com',
			},
		],
	},
};

export default nextConfig;
