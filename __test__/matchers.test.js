describe('Comparadores comunes', () => {

    const user = {
        name: "Cristian",
        lastname: "Bueno"
    }

    const user2 = {
        name: "Cristian",
        lastname: "Bueno"
    }

    const user3 = {
        name: "Cristian3",
        lastname: "Bueno3"
    }

    test('Igualdad de elementos', () => {
        expect(user).toEqual(user2);
    });

    test('No son exactamente iguales', () => {
        expect(user).not.toEqual(user3);
    });
    
});