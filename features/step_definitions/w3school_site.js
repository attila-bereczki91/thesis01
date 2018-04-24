'use strict';



module.exports = function () {

    
    this.Given(/^the w3school site is loaded$/, () =>{
        driver.get('https://www.w3schools.com/');
         return driver.wait(()=> driver.findElement(by.css('.w3-right > a[title="Search W3Schools"]')).isDisplayed());
    });
    this.When(/^the Search button is clicked$/, () =>{
         driver.findElement(by.css('.w3-right > a[title="Search W3Schools"]')).click();
         return driver.wait(() => driver.findElement(by.css('#gsc-iw-id1')).isDisplayed());
        // return driver.sleep(2000);
    });
    this.Then(/^the Search bar should be visible$/, () =>{
         return driver.wait(()=> driver.findElement(by.css('#gsc-iw-id1')).isDisplayed());
    });
    this.When(/^the "([^"]*)" term is typed into the Search bar$/, (search_term) =>{
        driver.findElement(by.css('input#gsc-i-id1.gsc-input')).sendKeys(search_term);
        return driver.wait(() => driver.findElement(by.css('#gsc-iw-id1')).isDisplayed());
        // return driver.sleep(2000);
   });
   this.When(/^the Search button is clicked on the page$/, () =>{
    driver.findElement(by.xpath("//button[@title='search']")).click();
    return driver.sleep(2000);
     return driver.wait(() => driver.findElement(by.xpath("//div[@class='gsc-results-wrapper-overlay gsc-results-wrapper-visible']")).isDisplayed());
});
};
