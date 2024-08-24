import { assert, test } from "@hazae41/phobos";
import { Memory, Secp256k1SigningKey, Secp256k1VerifyingKey, initBundled } from "./index.js";

function equals(a: Uint8Array, b: Uint8Array) {
  const ba = Buffer.from(a)
  const bb = Buffer.from(b)

  return ba.equals(bb)
}

test("sign", async () => {
  await initBundled()

  using hash = new Memory(crypto.getRandomValues(new Uint8Array(32)))

  using keypair = new Secp256k1SigningKey()
  using identity = keypair.verifying_key()

  using signaturex = keypair.sign_prehash_recoverable(hash)
  using signaturem = signaturex.to_bytes()
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