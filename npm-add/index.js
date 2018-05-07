export function add(a, b) {
    return a + b;
}

export function repetitive_adds(length) {
    for (let i = 0; i < length; i++) {
        add(i, i);
    }
}
