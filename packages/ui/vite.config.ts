import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import dts from "unplugin-dts/vite";

export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),

        dts({
            entryRoot: "src",
        }),
    ],

    build: {
        lib: {
            entry: "src/index.ts",
            formats: ["es"],
            fileName: "index",
        },

        rolldownOptions: {
            external: ["react", "react-dom"],
        },
    },
});