var config = require('../nightwatch.conf.js');

module.exports = {
  'Do some stuff and pass': function(browser) {
    browser
      .url('https://fleet.dev.pie.io')
      .waitForElementVisible('body')
      .assert.title('Pie fleet')
      .end();
  }
};
