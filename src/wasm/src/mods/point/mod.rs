use wasm_bindgen::prelude::*;

use crate::libs::jse::ojse;
use crate::libs::jse::rjse;

use crate::Secp256k1Scalar;

use memory_wasm::Memory;

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
    pub fn from_bytes(input: &Memory) -> Result<Secp256k1ProjectivePoint, JsError> {
        use k256::elliptic_curve::sec1::FromEncodedPoint;

        let encoded_point = rjse!(k256::EncodedPoint::from_bytes(&input.inner))?;
        let inner = ojse!(k256::ProjectivePoint::from_encoded_point(&encoded_point).into_option())?;

        Ok(Self { inner })
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
