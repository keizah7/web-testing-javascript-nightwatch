const datajs = require('../pages/data.js');
const utils = require('../helper/utils.js');
let data = datajs.getAll();

module.exports = {
    before: function (driver) {
        driver.maximizeWindow();
        // open landng page
        driver.url(driver.globals.web_url);
    },

    after: function (driver) {
        driver.end();
    },

    // 'Should be able to open about us page': function (driver) {
    //   driver.url(driver.globals.web_url);
    //   driver.click(data.home.aboutUsMenu);
    //
    //   // wait and assert success message.
    //   driver.waitForElementPresent(data.about.headerTitle, 'Header is present.');
    //   driver.assert.containsText(data.about.headerTitle, 'About');
    // },

    'Should be able to open login page': function (driver) {
        driver.url(driver.globals.web_url);

        driver.setValue(data.home.loginField, data.user.login);
        driver.setValue(data.home.passwordField, data.user.password);
        driver.click(data.home.button);

        driver.waitForElementPresent('div[id=site-name]', 'Header is present.');
        driver.assert.containsText('div[id=site-name]', 'WebIssues');
    },

    'Should be able to search and find an issue': function (driver) {
        driver.url(driver.globals.web_url + data.client.url);

        driver.setValue(data.client.searchField, data.client.searchPattern);
        driver.click(data.client.searchButton);

        driver.useXpath().waitForElementPresent(data.client.foundItemXpath, 'Link is present');
        driver.assert.containsText(data.client.foundItemXpath, data.client.searchPattern);
    },
};
