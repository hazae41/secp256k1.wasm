use wasm_bindgen::prelude::*;

use memory_wasm::Memory;

#[wasm_bindgen]
pub struct Secp256k1SignatureAndRecovery {
    pub(crate) signature: k256::ecdsa::Signature,
    pub(crate) recovery: k256::ecdsa::RecoveryId,
}

#[wasm_bindgen]
impl Secp256k1SignatureAndRecovery {
    #[wasm_bindgen]
    pub fn to_bytes(&self) -> Memory {
        let mut bytes = self.signature.to_bytes().to_vec();
        bytes.push(self.recovery.to_byte());
        Memory::new(bytes)
    }
}
