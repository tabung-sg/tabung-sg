import React from 'react';
import ReactDOM from 'react-dom';
import Main from "./pages/Main"

const rootElement = document.getElementById("main");
let showPreLaunchPage = false;
if (typeof(process.env.WEBPACK_DEV_SERVER_SHOW_PRE_LAUNCH_PAGE) !== "undefined" && process.env.WEBPACK_DEV_SERVER_SHOW_PRE_LAUNCH_PAGE.toLowerCase() === "true") {
  showPreLaunchPage = true;
}
ReactDOM.render(
    <Main showPreLaunchPage={showPreLaunchPage} />,
    rootElement
);