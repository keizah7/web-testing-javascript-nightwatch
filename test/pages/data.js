(function () {
    var data = {
        home: {
            url: '/',
            loginField: 'input[id=field-login-login]',
            passwordField: 'input[id=field-login-password]',
            button: 'input[id=field-login-loginSubmit]',
        },
        client: {
            url: '/client/index.php?folder=5',
            searchField: 'input[id=field-search-searchBox]',
            searchButton: 'input[id=field-search-searchSubmit]',
            searchPattern: 'nightwatch',
            foundItemXpath: '/html/body/div[2]/table/tbody/tr/td[2]/div/table/tbody/tr[2]/td[2]/a[2]',
        },
        issue: {
            addIssueLinkXpath: '/html/body/div[2]/table/tbody/tr/td[2]/div/div[1]/a[2]',
            nameField: '//*[@id="field-issues-issueName"]',
            severityField: '//*[@id="field-issues-value4"]',
            descriptionField: '//*[@id="field-issues-descriptionText"]',
            button: '//*[@id="field-issues-okSubmit"]',
            titleXpath: '/html/body/div[2]/table/tbody/tr[2]/td/div/h2'
        },
        user: {
            login: 'murashka.arturas@gmail.com',
            password: 'murashka.arturas@gmail.com',
        },
    };
    exports.getAll = function () {
        return data;
    };
})();

