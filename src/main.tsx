import ReactDOM from "react-dom/client";
import "./app/styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app/App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
);
