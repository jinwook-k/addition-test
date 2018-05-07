const wasmAdd = import("@jinwookkim/wasm-add/wasm_add.js");
const jsAdd = import("@jinwookkim/npm-add/index.js");

wasmAdd.then(wasmAdd => {
    jsAdd.then(jsAdd => {
        const iterMillionTimes = 25;

        let wasmResultArr = [];
        for (let iter = 0; iter < iterMillionTimes; iter++) {
            let t = performance.now();
            for (let i = 0; i < 1000000; i++) {
                wasmAdd.add(i,i);
            }
            wasmResultArr.push((performance.now() - t).toFixed(2));
        }
        console.log("Wasm: ", wasmResultArr.toString());

        let wasmInlineResultArr = [];
        for (let iter = 0; iter < iterMillionTimes; iter++) {
            let t = performance.now();
            wasmAdd.repetitive_adds(1000000);
            wasmInlineResultArr.push((performance.now() - t).toFixed(2));
        }
        console.log("Inline Wasm: ", wasmInlineResultArr.toString());

        let jsResultArr = [];
        for (let iter = 0; iter < iterMillionTimes; iter++) {
            let t = performance.now();
            for (let i = 0; i < 1000000; i++) {
                jsAdd.add(i,i);
            }
            jsResultArr.push((performance.now() - t).toFixed(2));
        }
        console.log("JS: ", jsResultArr.toString());

        let jsInlineResultArr = [];

        for (let iter = 0; iter < iterMillionTimes; iter++) {
            let t = performance.now();
            jsAdd.repetitive_adds(1000000);
            jsInlineResultArr.push((performance.now() - t).toFixed(2));
        }
        console.log("Inline JS: ", jsInlineResultArr.toString());
    });
});