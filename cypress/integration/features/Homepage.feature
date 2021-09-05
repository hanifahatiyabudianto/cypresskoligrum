Feature: BDD Atlas Homepage Colour Quote

    I want to be able to submit quote in various Colour

    @TC001 @BlueColour
    Scenario: I want to be able to submit a Blue Quote
        Given I open BDD Atlas Web
        When I type a quote: Hello World
            And I choose the Blue colour
        Then I verify quote submitted "Blue" and "Hello World"
        Then I verify quote has been deleted: Hello

    @TC002 @AllColour
    Scenario Outline: I want to be able to submit a <colour> Quote
        Given I open BDD Atlas Web
        When I type a quote: Hello World
            And I choose the <colour> colour
        Then I verify quote submitted "<colour>" and "Hello World"
        Then I verify quote has been deleted: Hello
    Examples: 
        | colour |
        | White  |
        | Yellow |
        | Cyan   |
        | Blue   |