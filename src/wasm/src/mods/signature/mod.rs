use wasm_bindgen::prelude::*;

use memory_wasm::Memory;

#[wasm_bindgen]
pub struct Secp256k1SignatureAndRecovery {
    pub(crate) signature: k256::ecdsa::Signature,
    pub(crate) recovery: k256::ecdsa::RecoveryId,
}

#[wasm_bindgen]
impl Secp256k1SignatureAndRecovery {
    #[wasm_bindgen(constructor)]
    pub fn new(signature: &Memory, recovery: u8) -> Result<Secp256k1SignatureAndRecovery, JsValue> {
        let sigres = k256::ecdsa::Signature::from_slice(&signature.inner);
        let sigraw = sigres.map_err(|_| JsError::new("Secp256k1SignatureAndRecovery::new"))?;

        let recopt = k256::ecdsa::RecoveryId::from_byte(recovery);
        let recraw = recopt.ok_or_else(|| JsError::new("Secp256k1SignatureAndRecovery::new"))?;

        Ok(Self {
            signature: sigraw,
            recovery: recraw,
        })
    }

    #[wasm_bindgen]
    pub fn from_bytes(input: &Memory) -> Result<Secp256k1SignatureAndRecovery, JsValue> {
        let sigres = k256::ecdsa::Signature::from_slice(&input.inner[..64]);
        let sigraw =
            sigres.map_err(|_| JsError::new("Secp256k1SignatureAndRecovery::from_bytes"))?;

        let recopt = k256::ecdsa::RecoveryId::from_byte(input.inner[64]);
        let recraw =
            recopt.ok_or_else(|| JsError::new("Secp256k1SignatureAndRecovery::from_bytes"))?;

        Ok(Self {
            signature: sigraw,
            recovery: recraw,
        })
    }

    #[wasm_bindgen]
    pub fn to_bytes(&self) -> Memory {
        let mut bytes = self.signature.to_bytes().to_vec();
        bytes.push(self.recovery.to_byte());
        Memory::new(bytes)
    }
}
