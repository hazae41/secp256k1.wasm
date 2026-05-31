use wasm_bindgen::prelude::*;

use crate::Secp256k1Scalar;

#[wasm_bindgen]
pub struct Secp256k1ProjectivePoint {
    pub(crate) inner: k256::ProjectivePoint,
}

#[wasm_bindgen]
impl Secp256k1ProjectivePoint {
    #[wasm_bindgen]
    pub fn generator() -> Secp256k1ProjectivePoint {
        Self { inner: k256::ProjectivePoint::GENERATOR }
    }

    #[wasm_bindgen]
    pub fn multiply(&self, scalar: &Secp256k1Scalar) -> Secp256k1ProjectivePoint {
        Self { inner: self.inner * scalar.inner }
    }

    #[wasm_bindgen]
    pub fn add(&self, other: &Secp256k1ProjectivePoint) -> Secp256k1ProjectivePoint {
        Self { inner: self.inner + other.inner }
    }

    #[wasm_bindgen]
    pub fn is_identity(&self) -> bool {
        use k256::elliptic_curve::Group;

        self.inner.is_identity().into()
    }
}
