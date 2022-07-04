use std::{io, ops};

const HEX_CODES: [char; 16] = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F',
];

pub enum ColorSpace {
    HSL,
    RGB,
}

pub struct Color {
    pub space: ColorSpace,
    /// All formats have 3 channels, plus another for opacity
    pub channels: [f32; 4],
}

/// Convert a float to Hexadecimal. This is a simplified
/// implementation, aimed towards color codes where each
/// channel has at most 2 characters.
fn hexi(n: f32) -> (char, char) {
    let first = n / 16.0;
    let remainder = first % 1.0;

    (
        HEX_CODES[first as usize],
        HEX_CODES[(remainder * 16.0) as usize],
    )
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn should_convert_a_number_to_hexadecimal() {
        assert_eq!(hexi(220.0), ('D', 'C'));
    }
}
