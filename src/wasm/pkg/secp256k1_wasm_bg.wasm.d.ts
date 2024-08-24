/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export function __wbg_secp256k1signingkey_free(a: number, b: number): void;
export function secp256k1signingkey_new(): number;
export function secp256k1signingkey_from_bytes(a: number, b: number): void;
export function secp256k1signingkey_to_bytes(a: number): number;
export function secp256k1signingkey_verifying_key(a: number): number;
export function secp256k1signingkey_sign_prehash_recoverable(a: number, b: number, c: number): void;
export function __wbg_secp256k1signatureandrecovery_free(a: number, b: number): void;
export function secp256k1signatureandrecovery_to_bytes(a: number): number;
export function __wbg_secp256k1verifyingkey_free(a: number, b: number): void;
export function secp256k1verifyingkey_from_sec1_bytes(a: number, b: number): void;
export function secp256k1verifyingkey_recover_from_prehash(a: number, b: number, c: number): void;
export function secp256k1verifyingkey_to_sec1_compressed_bytes(a: number): number;
export function secp256k1verifyingkey_to_sec1_uncompressed_bytes(a: number): number;
export function secp256k1signingkey_random(): number;
export function __wbg_memory_free(a: number, b: number): void;
export function memory_new(a: number, b: number): number;
export function memory_ptr(a: number): number;
export function memory_len(a: number): number;
export function __wbindgen_add_to_stack_pointer(a: number): number;
export function __wbindgen_exn_store(a: number): void;
export function __wbindgen_malloc(a: number, b: number): number;
