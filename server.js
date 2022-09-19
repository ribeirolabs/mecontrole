import { createRequestHandler } from "@remix-run/vercel";
import * as build from "@remix-run/dev/server-build";

console.log("server", process.env);

export default createRequestHandler({ build, mode: process.env.NODE_ENV });
