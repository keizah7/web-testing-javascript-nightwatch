const datajs = require('../pages/data.js');
let data = datajs.getAll();
const utils = require('../helper/utils.js');

module.exports.createIssue = function (driver) {
    let title = utils.getRandomString('QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnmmmmmm  ', 25);

    driver
        .url(driver.globals.web_url + data.client.url)
        .click(data.issue.addIssueLinkXpath)
        .waitForElementVisible('/html/body')
        .setValue(data.issue.nameField, title)
        .clearValue(data.issue.severityField)
        .setValue(data.issue.severityField, utils.getRandomNumber(3))
        .setValue(data.issue.descriptionField, utils.getRandomString(' QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnmmmmmm 1234567890', 255))
        .click(data.issue.button)
        .assert.containsText(data.issue.titleXpath, title);
};
