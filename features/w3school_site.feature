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
    #Then the SRL popup should be displayed
    #And the SRL should contain at least one item

    #When the X button of the SRL popup is clicked
    #Then the SRL popup should be hidden
    #And the placeholder text should be displayed in the Search bar
    #And the w3school logo should be visible
    #And the bar block should contain at least one item

    #When on of the item is clicked on the bar block
    #Then the proper page should load
    #And the title should match the opened page

    Examples:
    | search_term            |
    | responsive web design  |
    
   
  # @phone
  #Scenario: CAREER_2 - Searching for jobs
   # Given the W3 site is loaded
   

