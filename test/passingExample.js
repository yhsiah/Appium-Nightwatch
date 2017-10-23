var config = require('../nightwatch.conf.js');

module.exports = {
  'Do some stuff and pass': function(browser) {
    browser
      .url('https://www.piemapping.com')
      .waitForElementVisible('body')
      .assert.title('Pie Mapping - Home')
      .end();
  }
};
