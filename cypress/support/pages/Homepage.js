const locator = require('../locator/homepageLocator');
let css_colour = { //has map
    Blue:'background-color: blue;',
    Yellow: 'background-color: yellow;',
    Cyan: 'background-color: cyan;',
    White: 'background-color: white;'
}
class Homepage {
    async visit(path){
        cy.visit(path)
        return cy.url().should('eq','https://bdd.atlasid.tech/')
    }

    async type_quote(quote){
        return cy.get(locator.datatestid.ta_quote).type(quote);
    }

    async choose_colour(colour){
        //colour available White Yello Magenta Blue  Cyan
        return cy.get(locator.datatestid.sel_colour).select(colour)
    }

    async submit_quote(quote,colour){
        cy.get(locator.datatestid.btn_submit).click()
        cy.get(locator.datatestid.cont_colour).should('have.attr','style',css_colour[colour])
        //cara lain
        cy.get(locator.datatestid.cont_colour).should('have.attr','style').then((color) => {
            expect(color).to.be.equal(css_colour[colour]);
        })
        return cy.contains(quote).should('exist');
    }

    async clear_quote (quote) {
        return cy.contains(quote).click().should('not.exist')
    }
}

module.exports=Homepage;