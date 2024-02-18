import {expect, test} from "vitest";
import {BumblorArabicConverter} from "./BumblorArabicConverter.ts";


test('Correct Input Upper case',() => {
   const input = 'MMMMDCCCCXXXXIIII';
    const converter: BumblorArabicConverter = new BumblorArabicConverter();
   expect(converter.bumblor2arabic(input)).toBe(4944);
});

test('Correct Input Lower Case',() => {
    const input = 'MMMMDCCCCXXXXIIII'.toLowerCase();
    const converter: BumblorArabicConverter = new BumblorArabicConverter();
    expect(converter.bumblor2arabic(input)).toBe(4944);
});

test('D L V Appear more than once', () => {
    const input = 'DDX';
    const converter = new BumblorArabicConverter();
    expect(() => converter.bumblor2arabic(input)).toThrowError('Malformed Number');
});


test('M C X I Appear more than 4 times', () => {
    const input = 'MMDDCCCCC';
    const converter: BumblorArabicConverter = new BumblorArabicConverter();
    expect(() => converter.bumblor2arabic(input)).toThrowError(Error('Malformed Number'));
})

test('Out of Order 1', () => {
    const input = 'MMMCM';
    const converter: BumblorArabicConverter = new BumblorArabicConverter();
    expect( () => converter.bumblor2arabic(input)).toThrowError(Error('Malformed Number'));
})

test('Out of Order 2', () => {
    const input = 'IVXCDM';
    const converter: BumblorArabicConverter = new BumblorArabicConverter();
    expect( () => converter.bumblor2arabic(input)).toThrowError(Error('Malformed Number'));
})

test('Out of Order 3', () => {
    const input = 'MMMMDCCIX';
    const converter: BumblorArabicConverter = new BumblorArabicConverter();
    expect( () => converter.bumblor2arabic(input)).toThrowError(Error('Malformed Number'));
})

test('Not Included Syntax Upper', () => {
    const input = 'MMMMDCCK';
    const converter: BumblorArabicConverter = new BumblorArabicConverter();
    expect(() => converter.bumblor2arabic(input)).toThrowError(Error('Malformed Number'));
})

test('Not Included Syntax Lower', () => {
    const input = 'MMMMDCCk';
    const converter: BumblorArabicConverter = new BumblorArabicConverter();
    expect(() => converter.bumblor2arabic(input)).toThrowError(Error('Malformed Number'));
})

test('Out of Bounds Smaller Than 1 (empty string)', () => {
    const input = '';
    const converter: BumblorArabicConverter = new BumblorArabicConverter();
    expect(() => converter.bumblor2arabic(input)).toThrowError(Error('Malformed Number'));
})

test('Leading Space', () => {
    const input = ' MMDDCCCCC';
    const converter: BumblorArabicConverter  = new BumblorArabicConverter();
    expect(() => converter.bumblor2arabic(input)).toThrowError(Error('Malformed Number'));
})

test('Middle Space', () => {
    const input = 'MMDDC CCCC';
    const converter: BumblorArabicConverter = new BumblorArabicConverter();
    expect(() =>  converter.bumblor2arabic(input)).toThrowError(Error('Malformed Number'));
})

test('Trailing Space', () => {
    const input = 'MMDDCCCCC ';
    const converter: BumblorArabicConverter = new BumblorArabicConverter();
    expect( () => converter.bumblor2arabic(input)).toThrowError(Error('Malformed Number'));
})


test('FLoating point', () => {
    const input = 1.1;
    const converter: BumblorArabicConverter = new BumblorArabicConverter();
    expect( () => converter.arabic2bumblor(input)).toThrowError(Error('Malformed Number'));
})

test('Out of bounds > 4999', () => {
    const input = 5000;
    const converter: BumblorArabicConverter = new BumblorArabicConverter();
    expect( () =>converter.arabic2bumblor(input)).toThrowError(Error('Out of Range'));
})

test('Out of bounds < 1', () => {
    const input = -1;
    const converter: BumblorArabicConverter = new BumblorArabicConverter();
    expect( () => converter.arabic2bumblor(input)).toThrowError(Error('Out of Range'));
})

test('Correcct Input for Bumblor -> Arabic', () => {
    const input = 4944;
    const converter: BumblorArabicConverter = new BumblorArabicConverter();
    expect(converter.arabic2bumblor(input)).toBe('MMMMDCCCCXXXXIIII'.toLowerCase());
})









