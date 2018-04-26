'use strict';


module.exports = function () {

    var SEARCH_BUTTON_SELECTOR = '.w3-right > a[title="Search W3Schools"]',
        SEARCH_BAR_SELECTOR = '#gsc-iw-id1',
        SEARC_BAR_INPUTFIELD_SELECTOR = 'input#gsc-i-id1.gsc-input',
        SEARCH_BUTTON2_SELECTOR = "//button[@title='search']",
        SRL_POPUP_SELECTOR = ".gsc-results-wrapper-overlay",
        X_BUTTON_OF_SRL_SELECTOR = "//div[@class='gsc-results-close-btn gsc-results-close-btn-visible']",
        W3SCHOOL_LOGO_SELECTOR = '.w3-half> a[class=w3schools-logo]',
        HOME_BUTTON_SELECTOR = 'a.topnav-icons.fa-home.w3-left',
        TITLE_SELECTOR = '.w3-col > h1';



    this.Given(/^the w3school site is loaded$/, () => {
        driver.get('https://www.w3schools.com/');
        return driver.wait(() => driver.findElement(by.css(SEARCH_BUTTON_SELECTOR)).isDisplayed());
    });
    this.When(/^the Search button is clicked$/, () => {
        driver.findElement(by.css(SEARCH_BUTTON_SELECTOR)).click();
        return driver.wait(() => driver.findElement(by.css(SEARCH_BAR_SELECTOR)).isDisplayed());
    });
    this.When(/^the "([^"]*)" term is typed into the Search bar$/, (search_term) => {
        driver.findElement(by.css(SEARC_BAR_INPUTFIELD_SELECTOR)).sendKeys(search_term);
        //return driver.wait(() => driver.findElement(by.css('#gsc-iw-id1')).isDisplayed());
    });
    this.When(/^the Search button is clicked on the page$/, () => {
        driver.findElement(by.xpath(SEARCH_BUTTON2_SELECTOR)).click();
        return driver.wait(() => driver.findElement(by.css(SRL_POPUP_SELECTOR)).isDisplayed());
    });
    this.When(/^the X button of the SRL popup is clicked$/, () => {
        driver.findElement(by.xpath(X_BUTTON_OF_SRL_SELECTOR)).click();
        return driver.sleep(2000);
        //  return driver.wait(() => driver.findElement(by.xpath("//div[@class='gsc-results-wrapper-overlay gsc-results-wrapper-visible']")).isDisplayed());
    });

    this.When(/^the "([^"]*)" item is clicked on the bar block$/, (title) => {
        driver.findElement(by.xpath('//a[contains(text(), "' + title + '")]')).click();
        //return driver.sleep(5000);
    });
    this.Then(/^the Search bar should be visible$/, () => {
        return driver.wait(() => driver.findElement(by.css(SEARCH_BAR_SELECTOR)).isDisplayed());
    });

    this.Then(/^the SRL popup should be (displayed|hidden)$/, (visibility) => {
        return expect(driver.findElement(by.css(SRL_POPUP_SELECTOR)).isDisplayed()).to.eventually.equal(visibility === 'displayed');
    });
    //SANYIKA
    this.Then(/^the ([^"]*) should be displayed in the Search bar$/, placeholder_text => {
        return expect(driver.findElement(by.css(SEARCH_BAR_SELECTOR).placeholder).getText()).to.eventually.equal(placeholder_text);
    });
    this.Then(/^the w3school logo should be visible$/, () => {
        driver.findElement(by.css(W3SCHOOL_LOGO_SELECTOR)).isDisplayed();
    });
    //SANYIKA
    this.Then(/^the "(.*)" should match the opened page$/, tutorial_title => {
        return expect(driver.findElement(by.css(TITLE_SELECTOR)).getText()).to.eventually.equal(tutorial_title);
    });
    this.Then(/^the Home button is displayed$/, () => {
        driver.findElement(by.css(HOME_BUTTON_SELECTOR)).isDisplayed();
    });
    this.Then(/^the Home button is clicked$/, () => {
        driver.findElement(by.css(HOME_BUTTON_SELECTOR)).click();
    });
    /*this.Then(/^the SRL should contain at least one item$/, () =>{
        return driver.wait(()=> driver.findElement(by.xpath("//div[@class='gsc-results-wrapper-overlay gsc-results-wrapper-visible']")).isDisplayed());
    });
    */

};
