import { assert, test } from "@hazae41/phobos";
import { Buffer } from "node:buffer";
import { Memory, Secp256k1SigningKey, Secp256k1VerifyingKey, load } from "./mod.ts";

function equals(a: Uint8Array, b: Uint8Array) {
  const ba = Buffer.from(a)
  const bb = Buffer.from(b)

  return ba.equals(bb)
}

test("sign", async () => {
  await load()

  using hash = new Memory(crypto.getRandomValues(new Uint8Array(32)))

  using keypair = Secp256k1SigningKey.from_bytes(new Memory(crypto.getRandomValues(new Uint8Array(32))))
  using identity = keypair.publish()

  using signaturex = keypair.sign_prehash_recoverable(hash)
  using signaturem = signaturex.to_rsv_bytes()
  const signatureb = signaturem.bytes

  const r = signatureb.subarray(0, 32)
  const s = signatureb.subarray(32, 64)
  const v = signatureb[64]

  console.log(r, s, v)

  using identity2 = Secp256k1VerifyingKey.recover_from_prehash(hash, signaturex)

  using midentity = identity.to_sec1_compressed_bytes()
  using midentity2 = identity2.to_sec1_compressed_bytes()

  assert(equals(midentity.bytes, midentity2.bytes))
})