const Intern = require('../lib/Intern');

describe('Intern', () => {
    let adam;

    beforeEach(() => {
        adam = new Intern('adam', 1, 'adam@gmail.com', 'Rutgers')
    })

    describe('create new Intern object', () => {

        it('should create a new Intern object', () => {

            expect(adam.name).toBe('adam')
            expect(adam.id).toBe(1)
            expect(adam.email).toBe('adam@gmail.com')
            expect(adam.school).toBe('Rutgers')
        })

        it('should gets Intern school', () => {
            expect(adam.getSchool()).toBe('Rutgers')
        })

        it('should gets Intern role', () => {
            expect(adam.getRole()).toBe('Intern')
        })
    })
})
