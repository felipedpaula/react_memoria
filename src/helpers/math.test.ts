import {plus, minus, multiply, divide} from './math';

describe('Testando funções de matemática:', () => {
    it('Deve somar corretamente', () => {
        let result = plus(5, 8);
        expect(result).toBe(13);
    });

    it('Deve subtrair corretamente', () => {
        let result = minus(4, 3);
        expect(result).toBe(1);
    });

    it('Deve multiplicar corretamente', () => {
        let result = multiply(5, 3);
        expect(result).toBe(15);
    });

    it('Deve subtrair corretamente', () => {
        let result = divide(9, 3);
        expect(result).toBe(3);
    });
});

export {};