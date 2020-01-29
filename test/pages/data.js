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
            searchPattern: 'Nightwatch',
            foundItemXpath: '/html/body/div[2]/table/tbody/tr/td[2]/div/table/tbody/tr[2]/td[2]/a[2]',
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

