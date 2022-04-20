import { mockData } from './mockData';

describe('Home page', () => {
    it('Load home page', () => {
        cy.visit('/');
        cy.get('#main-title').should('contain', 'STEM SWIFT ACADEMY');
    });
});

describe('Login page', () => {
    it('Loads login page', () => {
        cy.visit('/login');
        cy.get('.login-form').should('exist');
    });

    it('Logs in the user with valid data', () => {
        cy.visit('/login');

        cy.get('input[name=email]').type(mockData.users[0].email);
        cy.get('input[name=password]').type(`${mockData.users[0].password}{enter}`);

        cy.url().should('include', '/');
        cy.get('nav').should('contain', 'Logout');
    });

    it('Displays error message with incorrect email', () => {
        cy.visit('/login');

        cy.get('input[name=email]').type(`${mockData.users[0].email}1`);
        cy.get('input[name=password]').type(`${mockData.users[0].password}{enter}`);

        cy.get('#swal2-title').should('contain', 'Error: Invalid email or password');
    });

    it('Displays error message with incorrect password', () => {
        cy.visit('/login');

        cy.get('input[name=email]').type(mockData.users[0].email);
        cy.get('input[name=password]').type(`${mockData.users[0].password}1{enter}`);

        cy.get('#swal2-title').should('contain', 'Error: Invalid email or password');
    });
})