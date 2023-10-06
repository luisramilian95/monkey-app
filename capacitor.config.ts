import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
	appId: "com.golipass.app",
	appName: "Golipass",
	webDir: "www",
	server: {
		androidScheme: "https",
	},
};

export default config;
