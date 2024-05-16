import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.join(__dirname, "src"),
            "index.scss": path.join(__dirname, "src/app/styles/index.scss"),
        },
    },
});
