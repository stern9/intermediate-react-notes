import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// other stuff that needs to take place in the client end or browser, eg analytics

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
