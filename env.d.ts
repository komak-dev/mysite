// import { KVNamespace, D1Database } from "@cloudflare/workers-types";

interface CloudflareEnv {
  // The KV Namespace binding type used here comes
  // from `@cloudflare/workers-types`. To use it in such
  // a way make sure that you have installed the package
  // as a dev dependency and you have added it to your
  //`tsconfig.json` file under `compilerOptions.types`.
  KV: KVNamespace;
  D1: D1Database;
  AUTH_USER: string;
  AUTH_PASSWORD: string;
}
