const Manager = require('../lib//Manager');

describe('Manager', () => {
    let adam;

    beforeEach(() => {
        adam = new Manager('adam', 1, 'adam@gmail.com', 100)
    })

    describe('create new Manager object', () => {

        it('should create a new Manager object', () => {

            expect(adam.name).toBe('adam')
            expect(adam.id).toBe(1)
            expect(adam.email).toBe('adam@gmail.com')
            expect(adam.officeNumber).toBe(100)
        })


        it('should gets Manager role', () => {
            expect(adam.getRole()).toBe('Manager')
        })
    })
})
