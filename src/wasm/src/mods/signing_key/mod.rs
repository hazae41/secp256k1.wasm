use wasm_bindgen::prelude::*;

use crate::Secp256k1SignatureAndRecovery;
use crate::Secp256k1VerifyingKey;

use memory_wasm::Memory;

#[wasm_bindgen]
pub struct Secp256k1SigningKey {
    pub(crate) inner: k256::ecdsa::SigningKey,
}

#[wasm_bindgen]
impl Secp256k1SigningKey {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self {
        Self::random()
    }

    #[wasm_bindgen]
    pub fn random() -> Self {
        let inner = k256::ecdsa::SigningKey::random(&mut rand_core::OsRng {});

        Self { inner }
    }

    #[wasm_bindgen]
    pub fn from_bytes(input: &Memory) -> Result<Secp256k1SigningKey, JsError> {
        use k256::elliptic_curve::generic_array::GenericArray;

        let array = GenericArray::from_slice(&input.inner);
        let result = k256::ecdsa::SigningKey::from_bytes(array);
        let inner = result.map_err(|_| JsError::new("SigningKey::from_bytes"))?;

        Ok(Self { inner })
    }

    #[wasm_bindgen]
    pub fn to_bytes(&self) -> Memory {
        Memory::new(self.inner.to_bytes().to_vec())
    }

    #[wasm_bindgen]
    pub fn verifying_key(&self) -> Secp256k1VerifyingKey {
        let inner = self.inner.verifying_key().clone();

        Secp256k1VerifyingKey { inner }
    }

    #[wasm_bindgen]
    pub fn sign_prehash_recoverable(
        &self,
        hashed: &Memory,
    ) -> Result<Secp256k1SignatureAndRecovery, JsError> {
        let rsign = self.inner.sign_prehash_recoverable(&hashed.inner);
        let tuple = rsign.map_err(|_| JsError::new("SigningKey::sign_prehash_recoverable"))?;
        let (signature0, recovery) = tuple;

        let signature = signature0.normalize_s().unwrap_or(signature0);

        Ok(Secp256k1SignatureAndRecovery {
            signature,
            recovery,
        })
    }
}
