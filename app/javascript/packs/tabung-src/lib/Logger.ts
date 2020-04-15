import config from "../config";

export const logInfo = (message: string, arg?: any) => {
  if (config.ENVIRONMENT !== "PROD") {
    console.log(message, arg);
  }
};
export const logError = (err: Error, customPrefixMessage?: string) => {
  if (config.ENVIRONMENT !== "PROD") {
    console.error(`${customPrefixMessage ? customPrefixMessage + " " : null}[${err.name}] ${err.message}`);
  }
};
