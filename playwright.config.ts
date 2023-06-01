import { PlaywrightTestConfig } from "@playwright/test";

const localUrl = "http://localhost:3000";

const webServer = {
  command: "npm run start",
  url: localUrl,
  reuseExistingServer: !process.env.CI,
};

const config: PlaywrightTestConfig = {
  webServer: webServer,
  use: {
    baseURL: localUrl,
  },
};

export default config;
