
import { logger } from "./utils/utils-lib";
import dotenv from "dotenv";

async function globalSetup() {
    logger.info("global setup started");
    try {
        if (process.env.ENV) {
            logger.info(`chosen environment: ${process.env.ENV}`);
            dotenv.config({
                path: `config/.env.${process.env.ENV}`,
                override: true,
                
            });
        }
        else {
            logger.info("chosen default environment: dev");
            dotenv.config({
                path: `config/.env.dev`,
                override: true
            });
        }
    } catch (error) {
        console.error("Error in loading environment variables", error)
    }
}
export default globalSetup;