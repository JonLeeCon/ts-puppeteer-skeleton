import * as puppeteer from "puppeteer";
import { EnvOptions } from "./interfaces";
// import * as CONST from "./constants";

/* TESTING */
// import { botTest } from './testing';

/* FUNCTIONS */

/**
 * main
 * Wrapper function for exection
 * @export
 * @param {EnvOptions} [options]
 * @returns {Promise<BotDB>} getBotDetails
 */
export async function createService(options?: EnvOptions): Promise<void> {
  // Session variables
  let DEBUG: boolean | undefined;

  /** Confirms valid env variables with error checking */
  ((options?: EnvOptions) => {
    DEBUG = process.env.DEBUG && process.env.DEBUG === "true" ? true : false;
  })(options);

  const browser = await puppeteer.launch({ headless: !DEBUG });
  const page = await browser.newPage();

  /** Main browser automation here */
  console.log('Automation start');
  
  
  /** Cleanup */
  await browser.close();

  return undefined;
}
