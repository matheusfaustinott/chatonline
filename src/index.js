import { createRoot } from "react-dom/client";
import App from "./App";
import LoginButton from "./components/login";


const root = createRoot(document.querySelector("#root"));

root.render(
  <>
    <App/>
    <LoginButton/>
  </>
);