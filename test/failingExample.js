var config = require('../nightwatch.conf.js');

module.exports = {
  'Do some stuff and fail': function(browser) {
    browser
      .url('https://www.piemapping.com')
      .waitForElementVisible('body')
      .assert.title('Wrong Title')
      .end();
  }
};
