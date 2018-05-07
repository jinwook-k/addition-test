#![feature(proc_macro, wasm_import_module, wasm_custom_section)]
extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}

#[wasm_bindgen]
pub fn repetitive_adds(length:i32)  {
    for x in 0..length {
        add(x, x);
    };
}

#[wasm_bindgen]
pub fn alert_add(a: i32, b: i32) -> i32 {
    let c = add(a, b);
    alert(&format!("Hello from Rust! {} + {} = {}", a, b, c));
    c
}

#[test]
fn it_works() {
    assert_eq!(add(2, 2), 4);
}