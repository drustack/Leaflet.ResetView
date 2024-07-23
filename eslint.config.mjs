import globals from "globals";

export default [{
    languageOptions: {
        globals: {
            ...globals.amd,
            ...globals.commonjs,
            ...Object.fromEntries(Object.entries(globals.node).map(([key]) => [key, "off"])),
        },

        ecmaVersion: 6,
        sourceType: "module",
    },

    rules: {
        "consistent-return": "off",
        curly: "error",
        indent: ["error", 4],
        "key-spacing": "off",
        "linebreak-style": ["off", "unix"],
        "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],

        "no-unused-expressions": ["error", {
            allowShortCircuit: true,
        }],

        "spaced-comment": "error",
        strict: "off",
        "wrap-iife": "off",
    },
}];