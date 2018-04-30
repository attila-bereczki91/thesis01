Feature: w3school site tests
As a user
I want to visit the w3school site in different layouts
So that I can see the application on multiple resolutions

@desktop
  Scenario Outline: Desktop_1 - Searching on w3school
   Given the w3school site is loaded
   When the Search button is clicked
   Then the Search bar should be visible

    When the "<search_term>" term is typed into the Search bar
    And the Search button is clicked on the page
    Then the SRL popup should be displayed
    #And the SRL should contain at least one item

    When the X button of the SRL popup is clicked
    Then the SRL popup should be hidden
    And the "<placeholder_text>" should be displayed in the Search bar
    And the w3school logo should be visible
    #And the bar block should contain at least one item

    When the "<title>" item is clicked on the bar block
    #Then the proper page should load
    And the "<tutorial>" should match the opened page
    And the Home button is displayed
    And the Home button is clicked

    Examples:
    | search_term            |  title             | tutorial| placeholder_text  |
    | responsive web design  |  Learn JavaScript |  JavaScript Tutorial |Custom Search|
    
   
   @phone
  Scenario Outline: Phone_1 - Searching on w3school
    Given the w3school site is loaded
    When the Search button is clicked
    Then the Search bar should be visible

    When the "<search_term>" term is typed into the Search bar
    And the Search button is clicked on the page
    Then the SRL popup should be displayed

    Examples:
    | search_term |
    | responsive web design|