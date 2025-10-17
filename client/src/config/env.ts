export const config = {
	apiUrl: import.meta.env.VITE_API_URL,
	appName: import.meta.env.VITE_APP_NAME,
} as const;


export type Config = typeof config;
