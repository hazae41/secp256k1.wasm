export * from "../../wasm/pkg/secp256k1_wasm.js";

import init from "../../wasm/pkg/secp256k1_wasm.js";
import { data } from "../../wasm/pkg/secp256k1_wasm.wasm.js";

export async function initBundled() {
  return await init({ module_or_path: data })
}
