describe('BDD Atlas', () => {
   it('Visit BDD Atlas Web', () => {
       cy.visit('https://bdd.atlasid.tech/')
       //Assertions Cypress
       cy.url().should('eq','https://bdd.atlasid.tech/')
       //Assertions chai.js
       cy.url().then((url) => {
            expect(url).to.be.equal('https://bdd.atlasid.tech/')
       })
   }); 
   
   it('Type a Quote', () => {
        cy.get('#inputQuote').type('Hello World!');
   });
   
   it('Select Colour', () => {
        cy.get('#colorSelect').select('Blue'); //select option
        // verify : show
   });

   it('Submit a Quote', () => {
        cy.get('#buttonAddQuote').click()
        cy.contains('Hello').should('exist')
    });

    it('Cleaar Specific Quote', () => {
        cy.contains('Hello').click().should('not.exist')
        // cy.contains('Hello').click().then(($elm) => {
        //     cy.get($elm).click()
        //     cy.get($elm).should('not.exist')
        // })
        cy.wait(2000)
    });
});