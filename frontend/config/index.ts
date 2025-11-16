import { EnvSchema } from "./scheme";
import { DevConfig } from "./environment/development";

let config: EnvSchema;
if (process.env.NODE_ENV === "development") {
    config = DevConfig;
} else {
    // For production and other environments, you can add more environment configs
    config = DevConfig; // Replace with appropriate config for other environments
}

export const AppConfig = config;
