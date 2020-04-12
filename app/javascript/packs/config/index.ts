import common from "./config.common.json";
import local from "./config.local.json";
import dev from "./config.dev.json";
import prod from "./config.prod.json";

const PROD_HOSTNAME = "www.tabung.sg";
const DEV_HOSTNAME = "tabung-sg-dev.herokuapp.com";

let config;

switch (window.location.hostname) {
  case PROD_HOSTNAME:
    config = { ...common, ...prod };
    break;
  case DEV_HOSTNAME:
    config = { ...common, ...dev };
    break;
  default:
    config = { ...common, ...local };
}

export default config;
