describe('User Onboarding App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    const nameInput = () => cy.get('input[name=username');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const subButton = () => cy.get('button[id=submit]')
    const tosInput = () => cy.get('input[name=tos]');

    it('checks if elems are present', () => {
        nameInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        subButton().should('exist');
        tosInput().should('exist');

    })
    it('checks if theres text present', () => {
        nameInput()
        .should('have.value', '')
        .type('Peter Parker')
        .should('have.value', 'Peter Parker')

        emailInput()
        .should('have.value', '')
        .type('spideyboy@gmail.com')
        .should('have.value', 'spideyboy@gmail.com')

        passwordInput()
        .should('have.value', '')
        .type('IronmanForever')
        .should('have.value', 'IronmanForever')

        tosInput().check()
    })
})