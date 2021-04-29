import { sumar, multiplicar, restar, dividir } from '../maths.js';


describe('Cálculos matemáticos', () => {

    test('Prueba de sumar', () => {
        expect(sumar(1, 1)).toBe(2);
    });

    test('Prueba de multiplicar', () => {
        expect(multiplicar(2, 2)).toBe(4);
    });

    test('Prueba de restar', () => {
        expect(restar(3, 2)).toBe(1);
    });

    test('Prueba de dividir', () => {
        expect(dividir(10, 2)).toBe(5);
    });
    
});