import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import WrapperProvider from "./providers/wrapperProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WrapperProvider>
      <App />
    </WrapperProvider>
  </React.StrictMode>
);
