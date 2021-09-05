const Homepage = require ('../support/pages/Homepage');
let homepage = new Homepage();
const HomepageData = require('../support/datatest/homepageData');

describe('BDD Atlas', () => {
    it('Visit BDD Atlas Web', () => {
        homepage.visit('')
        // homepage.visit('categories') //baseURL/{categories}
    }); 
    
    it('Type a Quote', () => {
         homepage.type_quote(HomepageData.datatest.quote);
    });
    
    it('Select Colour', () => {
         homepage.choose_colour(HomepageData.datatest.quote_colour);
    });
 
    it('Submit a Quote', () => {
         homepage.submit_quote(HomepageData.datatest.quote,HomepageData.datatest.quote_colour);
     });
 
    it('Clear Specific Quote', () => {
         cy.wait(3000)
         homepage.clear_quote(HomepageData.datatest.quote);
    });
});