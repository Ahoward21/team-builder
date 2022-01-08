const Employee = require('../lib/Employee');

describe('Employee', () => {
    let adam;

    beforeEach(() => {
        adam = new Employee('adam', 1, 'adam@gmail.com')
    })

    describe('create new employee object', () => {

        it('should create a new employee object', () => {

            expect(adam.name).toBe('adam')
            expect(adam.id).toBe(1)
            expect(adam.email).toBe('adam@gmail.com')
        })

        it('should gets employee name', () => {
            expect(adam.getName()).toBe('adam')
        })

        it('should gets employee ID', () => {
            expect(adam.getId()).toBe(1)
        })

        it('should gets employee email', () => {
            expect(adam.getEmail()).toBe('adam@gmail.com')
        })

        it('should gets employee role', () => {
            expect(adam.getRole()).toBe('Employee')
        })
    })
})
