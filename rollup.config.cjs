import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
console.log("🚀 ~ dts:", dts)
import tailwindcss from "tailwindcss";
import terser from "@rollup/plugin-terser";
import url from "@rollup/plugin-url";
import json from "@rollup/plugin-json";
const tailwindConfig = require("./tailwind.config.cjs");
const packageJson = require("./package.json");

const dependencies = ({ dependencies }) => Object.keys(dependencies || {});

const pkgdependencies = dependencies(packageJson);

/* exported rollup configuration */
// const config = {
//   external: (id) => pkgdependencies.includes(id),
// };

export default [
  {
    input: "src/index.ts",
    external: [
      ...pkgdependencies,
      "next/image",
      "next/navigation",
      "next/router",
    ],
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      json(),
      commonjs(),

      typescript({
        tsconfig: "./tsconfig.json",
      }),
      postcss({
        config: {
          path: "./postcss.config.js",
        },
        extensions: [".css"],
        inject: true,
        extract: true,

        plugins: [tailwindcss(tailwindConfig)],
      }),
      url(),
      terser(),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts.dts()],
    external: [/\.(css|less|scss)$/],
  },
];
