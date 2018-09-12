const renderTree = require('./index');
const PATHS = [
  '/home/michel/photos/wallaper.png',
  '/etc/passwd',
  '/etc/nginxconf.d/website.conf',
  '/home/michel/cv.pdf',
  '/etc/hosts',
  '/home/michel/photos/profile.png',
  '/home/michel'];

console.log(renderTree(PATHS));
