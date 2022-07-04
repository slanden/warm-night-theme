const HEX_CODES = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F',
];

/**
 * @enum {number}
 * @readonly
 */
const ColorSpace = {
    HSL: 0,
    RGB: 1,
}
Object.freeze(ColorSpace);

class Color {
    /**
     * @param {Object} props
     * @param {ColorSpace} props.space
     * @param {Array<number>} props.channels - Must contain 4 values
     */
    constructor(props) {
        this.space = props.space;
        this.channels = props.channels;
    }
}

/**
 * Convert a float to Hexadecimal. This is a simplified
 * implementation, aimed towards color codes where each
 * channel has at most 2 characters.
 * @param {number} n - The number to convert
 * @returns {Array<number>} 2 hexadecimal characters
 */
function hexi(n) {
    let first = n / 16;
    let remainder = first % 1;

    return [
        HEX_CODES[Math.trunc(first)] || 0,
        HEX_CODES[Math.trunc(remainder * 16.0)] || 0,
    ]
}
