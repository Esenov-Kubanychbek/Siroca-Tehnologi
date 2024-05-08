import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "index.scss": path.resolve(__dirname, "src/app/styles/index.scss"),
            "variables": path.resolve(__dirname, "src/shared/variables/variables.ts"),
        },
    },
});
