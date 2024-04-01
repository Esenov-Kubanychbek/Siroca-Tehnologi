import ReactDOM from "react-dom/client";
import "./app/styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app/App";
import { Suspense } from "react";
import { LoadingModal } from "./widgets";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <Suspense fallback={<LoadingModal />}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Suspense>,
);
