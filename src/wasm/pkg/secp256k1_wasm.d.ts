/* tslint:disable */
/* eslint-disable */
/**
*/
export class Memory {
  [Symbol.dispose](): void;
/**
* @param {Uint8Array} inner
*/
  constructor(inner: Uint8Array);
/**
* @returns {number}
*/
  ptr(): number;
/**
* @returns {number}
*/
  len(): number;
/**
* @returns {Uint8Array}
*/
  get bytes(): Uint8Array;
}
/**
*/
export class Secp256k1SignatureAndRecovery {
  [Symbol.dispose](): void;
/**
* @returns {Memory}
*/
  to_bytes(): Memory;
}
/**
*/
export class Secp256k1SigningKey {
  [Symbol.dispose](): void;
/**
*/
  constructor();
/**
* @returns {Secp256k1SigningKey}
*/
  static random(): Secp256k1SigningKey;
/**
* @param {Memory} input
* @returns {Secp256k1SigningKey}
*/
  static from_bytes(input: Memory): Secp256k1SigningKey;
/**
* @returns {Memory}
*/
  to_bytes(): Memory;
/**
* @returns {Secp256k1VerifyingKey}
*/
  verifying_key(): Secp256k1VerifyingKey;
/**
* @param {Memory} hashed
* @returns {Secp256k1SignatureAndRecovery}
*/
  sign_prehash_recoverable(hashed: Memory): Secp256k1SignatureAndRecovery;
}
/**
*/
export class Secp256k1VerifyingKey {
  [Symbol.dispose](): void;
/**
* @param {Memory} input
* @returns {Secp256k1VerifyingKey}
*/
  static from_sec1_bytes(input: Memory): Secp256k1VerifyingKey;
/**
* @param {Memory} hashed
* @param {Secp256k1SignatureAndRecovery} signature
* @returns {Secp256k1VerifyingKey}
*/
  static recover_from_prehash(hashed: Memory, signature: Secp256k1SignatureAndRecovery): Secp256k1VerifyingKey;
/**
* @returns {Memory}
*/
  to_sec1_compressed_bytes(): Memory;
/**
* @returns {Memory}
*/
  to_sec1_uncompressed_bytes(): Memory;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_secp256k1signatureandrecovery_free: (a: number, b: number) => void;
  readonly secp256k1signatureandrecovery_to_bytes: (a: number) => number;
  readonly __wbg_secp256k1verifyingkey_free: (a: number, b: number) => void;
  readonly secp256k1verifyingkey_from_sec1_bytes: (a: number, b: number) => void;
  readonly secp256k1verifyingkey_recover_from_prehash: (a: number, b: number, c: number) => void;
  readonly secp256k1verifyingkey_to_sec1_compressed_bytes: (a: number) => number;
  readonly secp256k1verifyingkey_to_sec1_uncompressed_bytes: (a: number) => number;
  readonly __wbg_secp256k1signingkey_free: (a: number, b: number) => void;
  readonly secp256k1signingkey_new: () => number;
  readonly secp256k1signingkey_from_bytes: (a: number, b: number) => void;
  readonly secp256k1signingkey_to_bytes: (a: number) => number;
  readonly secp256k1signingkey_verifying_key: (a: number) => number;
  readonly secp256k1signingkey_sign_prehash_recoverable: (a: number, b: number, c: number) => void;
  readonly secp256k1signingkey_random: () => number;
  readonly __wbg_memory_free: (a: number, b: number) => void;
  readonly memory_new: (a: number, b: number) => number;
  readonly memory_ptr: (a: number) => number;
  readonly memory_len: (a: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
