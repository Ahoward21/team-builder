const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    let adam;

    beforeEach(() => {
        adam = new Engineer('adam', 1, 'adam@gmail.com', 'Ahoward21')
    })

    describe('create new Engineer object', () => {

        it('should create a new Engineer object', () => {

            expect(adam.name).toBe('adam')
            expect(adam.id).toBe(1)
            expect(adam.email).toBe('adam@gmail.com')
            expect(adam.github).toBe('Ahoward21')
        })

        it('should gets Engineer github username', () => {
            expect(adam.getGithub()).toBe('Ahoward21')
        })

        it('should gets Engineer role', () => {
            expect(adam.getRole()).toBe('Engineer')
        })
    })
})
