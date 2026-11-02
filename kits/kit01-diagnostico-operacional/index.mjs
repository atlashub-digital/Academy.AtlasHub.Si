import fs from "node:fs";
import { diagnosticar } from "./lib.mjs";
const caminho = process.argv[2] ?? new URL("./dados-exemplo.json", import.meta.url);
const entrada = JSON.parse(fs.readFileSync(caminho, "utf8"));
console.log(JSON.stringify(diagnosticar(entrada),null,2));
