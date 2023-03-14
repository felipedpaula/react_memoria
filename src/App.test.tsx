describe('testes da função de matemática', () => {
    it('should add 1 to 1', () => {
        let result = 1 + 1;
        expect(result).toBe(2);
    });

    it('deve multiplicar 5 por 3  e retornar 15', () => {
        let result = 5 * 3;
        expect(result).toBe(15);
    });
});

export {};