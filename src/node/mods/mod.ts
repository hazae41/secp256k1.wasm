export * from "../../wasm/pkg/secp256k1_wasm.js";

/* @ts-types="../../wasm/pkg/secp256k1_wasm.d.ts" */
import init, {
  initSync, type InitOutput
} from "../../wasm/pkg/secp256k1_wasm.js";
import { data } from "../../wasm/pkg/secp256k1_wasm.wasm.js";

export async function load(): Promise<InitOutput> {
  return await init({ module_or_path: data })
}

export function loadSync(): InitOutput {
  return initSync({ module_or_path: data });
}
