const helDevUtils = require('hel-dev-utils');
const pkg = require('../package.json');

const subApp = helDevUtils.createLibSubApp(pkg, { npmCdnType: 'unpkg' });

// unpkg 私服
// const subApp = helDevUtils.createLibSubApp(pkg, { npmCdnType: 'unpkg', homePage: 'http://my-pack:8888' });

module.exports = subApp;
