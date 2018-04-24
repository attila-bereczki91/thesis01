'use strict';

module.exports = function () {

    
    this.Given(/^the w3school site is loaded$/, () =>{
        driver.get('https://www.w3schools.com/');
         return driver.wait(()=> driver.findElement(by.css('.w3-right > a[title="Search W3Schools"]')).isDisplayed());
    });
};
