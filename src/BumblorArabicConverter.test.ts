import {expect, test} from "vitest";

test('Correct Input Upper case',() => {
   const input = 'MMMMDCCCCXXXXIIII';
   const BumblorArabicConverter  = new BumblorArabicConverter();
   expect(BumblorArabicConverter.bumblor2arabic(input)).toBe(4944);
});

test('Correct Input Lower Case',() => {
    const input = 'MMMMDCCCCXXXXIIII'.toLowerCase();
    const BumblorArabicConverter  = new BumblorArabicConverter();
    expect(BumblorArabicConverter.bumblor2arabic(input)).toBe(4944);
});

test('D L V Appear more than once', () => {
    const input = 'DDX';
    const BumblorArabicConverter  = new BumblorArabicConverter();
    expect(BumblorArabicConverter.bumblor2arabic(input)).toBe(Error('Malformed Number'));
})

test('M C X I Appear more than 4 times', () => {
    const input = 'MMDDCCCCC';
    const BumblorArabicConverter  = new BumblorArabicConverter();
    expect(BumblorArabicConverter.bumblor2arabic(input)).toBe(Error('Malformed Number'));
})

test('Out of Order 1', () => {
    const input = 'MMMCM';
    const BumblorArabicConverter  = new BumblorArabicConverter();
    expect(BumblorArabicConverter.bumblor2arabic(input)).toBe(Error('Malformed Number'));
})

test('Out of Order 2', () => {
    const input = 'IVXCDM';
    const BumblorArabicConverter  = new BumblorArabicConverter();
    expect(BumblorArabicConverter.bumblor2arabic(input)).toBe(Error('Malformed Number'));
})

test('Out of Order 3', () => {
    const input = 'MMMMDCCIX';
    const BumblorArabicConverter  = new BumblorArabicConverter();
    expect(BumblorArabicConverter.bumblor2arabic(input)).toBe(Error('Malformed Number'));
})

test('Not Included Syntax Upper', () => {
    const input = 'MMMMDCCK';
    const BumblorArabicConverter  = new BumblorArabicConverter();
    expect(BumblorArabicConverter.bumblor2arabic(input)).toBe(Error('Malformed Number'));
})

test('Not Included Syntax Lower', () => {
    const input = 'MMMMDCCk';
    const BumblorArabicConverter  = new BumblorArabicConverter();
    expect(BumblorArabicConverter.bumblor2arabic(input)).toBe(Error('Malformed Number'));
})

test('Out of Bounds Smaller Than 1 (empty string)', () => {
    const input = '';
    const BumblorArabicConverter  = new BumblorArabicConverter();
    expect(BumblorArabicConverter.bumblor2arabic(input)).toBe(Error('Malformed Number'));
})

test('Leading Space', () => {
    const input = ' MMDDCCCCC';
    const BumblorArabicConverter  = new BumblorArabicConverter();
    expect(BumblorArabicConverter.bumblor2arabic(input)).toBe(Error('Malformed Number'));
})

test('Middle Space', () => {
    const input = 'MMDDC CCCC';
    const BumblorArabicConverter  = new BumblorArabicConverter();
    expect(BumblorArabicConverter.bumblor2arabic(input)).toBe(Error('Malformed Number'));
})

test('Traling Space', () => {
    const input = 'MMDDCCCCC ';
    const BumblorArabicConverter  = new BumblorArabicConverter();
    expect(BumblorArabicConverter.bumblor2arabic(input)).toBe(Error('Malformed Number'));
})

test('FLoating point', () => {
    const input = 1.1;
    const BumblorArabicConverter  = new BumblorArabicConverter();
    expect(BumblorArabicConverter.arabic2bumblor(input)).toBe(Error('Malformed Number'));
})

test('Out of bounds > 4999', () => {
    const input = 5000;
    const BumblorArabicConverter  = new BumblorArabicConverter();
    expect(BumblorArabicConverter.arabic2bumblor(input)).toBe(Error('Out of Range'));
})

test('Out of bounds < 1', () => {
    const input = -1;
    const BumblorArabicConverter  = new BumblorArabicConverter();
    expect(BumblorArabicConverter.arabic2bumblor(input)).toBe(Error('Out of Range'));
})









