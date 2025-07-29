import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { store } from "./lib/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <StrictMode> */}
      <HelmetProvider>
        <App />
      </HelmetProvider>
      {/* </StrictMode> */}
    </BrowserRouter>
  </Provider>
);
