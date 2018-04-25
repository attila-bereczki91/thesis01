'use strict';


module.exports = function () {

    var SEARCH_BUTTON_SELECTOR = '.w3-right > a[title="Search W3Schools"]',
        SEARCH_BAR_SELECTOR = '#gsc-iw-id1',
        TITLE

    
    this.Given(/^the w3school site is loaded$/, () =>{
        driver.get('https://www.w3schools.com/');
         return driver.wait(()=> driver.findElement(by.css(SEARCH_BUTTON_SELECTOR)).isDisplayed());
    });
    this.When(/^the Search button is clicked$/, () =>{
         driver.findElement(by.css(SEARCH_BUTTON_SELECTOR)).click();
         return driver.wait(() => driver.findElement(by.css(SEARCH_BAR_SELECTOR)).isDisplayed());
    });
    this.Then(/^the Search bar should be visible$/, () =>{
         return driver.wait(()=> driver.findElement(by.css('#gsc-iw-id1')).isDisplayed());
    });
    this.When(/^the "([^"]*)" term is typed into the Search bar$/, (search_term) =>{
        driver.findElement(by.css('input#gsc-i-id1.gsc-input')).sendKeys(search_term);
        return driver.wait(() => driver.findElement(by.css('#gsc-iw-id1')).isDisplayed());
   });
   this.When(/^the Search button is clicked on the page$/, () =>{
    driver.findElement(by.xpath("//button[@title='search']")).click();
     return driver.wait(() => driver.findElement(by.css(".gsc-results-wrapper-overlay")).isDisplayed());
});
this.Then(/^the SRL popup should be (displayed|hidden)$/, (visibility) =>{
    return expect(driver.findElement(by.css(".gsc-results-wrapper-overlay")).isDisplayed()).to.eventually.equal(visibility==='displayed');
});

/*this.Then(/^the SRL should contain at least one item$/, () =>{
    return driver.wait(()=> driver.findElement(by.xpath("//div[@class='gsc-results-wrapper-overlay gsc-results-wrapper-visible']")).isDisplayed());
});
*/
this.When(/^the X button of the SRL popup is clicked$/, () =>{
    driver.findElement(by.xpath("//div[@class='gsc-results-close-btn gsc-results-close-btn-visible']")).click();
    return driver.sleep(2000);
   //  return driver.wait(() => driver.findElement(by.xpath("//div[@class='gsc-results-wrapper-overlay gsc-results-wrapper-visible']")).isDisplayed());
});

this.When(/^the "([^"]*)" item is clicked on the bar block$/, (title) =>{
    driver.findElement(by.xpath('//a[contains(text(), "'+ title +'")]')).click();
    return driver.sleep(5000);
});

};

