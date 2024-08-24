use wasm_bindgen::prelude::*;

use crate::Secp256k1SignatureAndRecovery;

use memory_wasm::Memory;

#[wasm_bindgen]
pub struct Secp256k1VerifyingKey {
    pub(crate) inner: k256::ecdsa::VerifyingKey,
}

#[wasm_bindgen]
impl Secp256k1VerifyingKey {
    #[wasm_bindgen]
    pub fn from_sec1_bytes(input: &Memory) -> Result<Secp256k1VerifyingKey, JsError> {
        let result = k256::ecdsa::VerifyingKey::from_sec1_bytes(&input.inner);
        let inner = result.map_err(|_| JsError::new("Secp256k1VerifyingKey::from_sec1_bytes"))?;

        Ok(Self { inner })
    }

    #[wasm_bindgen]
    pub fn recover_from_prehash(
        hashed: &Memory,
        signature: &Secp256k1SignatureAndRecovery,
    ) -> Result<Secp256k1VerifyingKey, JsError> {
        let result = k256::ecdsa::VerifyingKey::recover_from_prehash(
            &hashed.inner,
            &signature.signature,
            signature.recovery,
        );
        let inner =
            result.map_err(|_| JsError::new("Secp256k1VerifyingKey::recover_from_prehash"))?;

        Ok(Secp256k1VerifyingKey { inner })
    }

    #[wasm_bindgen]
    pub fn to_sec1_compressed_bytes(&self) -> Memory {
        Memory::new(self.inner.to_encoded_point(true).to_bytes().into())
    }

    #[wasm_bindgen]
    pub fn to_sec1_uncompressed_bytes(&self) -> Memory {
        Memory::new(self.inner.to_encoded_point(false).to_bytes().into())
    }
}
