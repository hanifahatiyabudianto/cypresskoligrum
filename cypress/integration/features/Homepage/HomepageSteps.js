/* global Given, When, Then */
const Homepage = require('../../../support/pages/homepage');
let homepage = new Homepage();

Given(/^I open BDD Atlas Web$/,()=>{
    homepage.visit('');
})

When(/^I type a quote: (.+)$/,(quote)=>{
    homepage.type_quote(quote);
})

And(/^I choose the (\w+) colour$/,(colour)=>{
    homepage.choose_colour(colour);
})

//quote approach use backquote``
Then(`I verify quote submitted {string} and {string}`,(colour,quote)=>{
   homepage.submit_quote(quote,colour);
})

//regular expression use (/^$/)
Then(/^I verify quote has been deleted: (.+)$/,(quote)=>{
   homepage.clear_quote(quote); 
})