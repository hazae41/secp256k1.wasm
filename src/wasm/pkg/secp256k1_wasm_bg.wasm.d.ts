/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export const __wbg_secp256k1verifyingkey_free: (a: number, b: number) => void;
export const secp256k1verifyingkey_from_sec1_bytes: (a: number) => [number, number, number];
export const secp256k1verifyingkey_recover_from_prehash: (a: number, b: number) => [number, number, number];
export const secp256k1verifyingkey_to_sec1_compressed_bytes: (a: number) => number;
export const secp256k1verifyingkey_to_sec1_uncompressed_bytes: (a: number) => number;
export const __wbg_secp256k1signingkey_free: (a: number, b: number) => void;
export const secp256k1signingkey_new: () => number;
export const secp256k1signingkey_from_bytes: (a: number) => [number, number, number];
export const secp256k1signingkey_to_bytes: (a: number) => number;
export const secp256k1signingkey_verifying_key: (a: number) => number;
export const secp256k1signingkey_sign_prehash_recoverable: (a: number, b: number) => [number, number, number];
export const secp256k1signingkey_random: () => number;
export const __wbg_secp256k1signatureandrecovery_free: (a: number, b: number) => void;
export const secp256k1signatureandrecovery_new: (a: number, b: number) => [number, number, number];
export const secp256k1signatureandrecovery_from_bytes: (a: number) => [number, number, number];
export const secp256k1signatureandrecovery_to_bytes: (a: number) => number;
export const __wbg_memory_free: (a: number, b: number) => void;
export const memory_new: (a: number, b: number) => number;
export const memory_ptr: (a: number) => number;
export const memory_len: (a: number) => number;
export const __wbindgen_exn_store: (a: number) => void;
export const __externref_table_alloc: () => number;
export const __wbindgen_export_2: WebAssembly.Table;
export const __externref_table_dealloc: (a: number) => void;
export const __wbindgen_malloc: (a: number, b: number) => number;
export const __wbindgen_start: () => void;
