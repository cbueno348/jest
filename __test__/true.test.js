import { isNull, isTrue, isFalse, isUndefined } from '../true';


describe('Probar resultados nulos', () => {
    test('Null', () => {
        expect(isNull()).toBeNull();
    });
});

describe('Probar resultados verdaderos', () => {
    test('True', () => {
        expect(isTrue()).toBeTruthy();
    });
});

describe('Probar resultados falsos', () => {
    test('False', () => {
        expect(isFalse()).toBeFalsy();
    });
});

describe('Probar resultados indefinidos', () => {
    test('Undefined', () => {
        expect(isUndefined()).toBeUndefined();
    });
});

describe('Probar resultados no verdaderos', () => {
    test('Falso o verdadero', () => {
        expect(isFalse()).not.toBeTruthy();
    });
});