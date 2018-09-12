const renderTree = require('../src');

test('render an empty tree when the list of paths is empty', () => {
  const paths = [];
  expect(renderTree(paths)).toBe('');
});

test('render null when the list of paths is undefined', () => {
  expect(renderTree()).toBe(null);
});

test('render the expected tree when an array of paths is passed', () => {
  const paths = [
    '/etc/nginxconf.d/website.conf',
    '/etc/hosts'
  ];
  expect(renderTree(paths)).toBe('\netc\n\thosts\n\tnginxconf.d\n\t\twebsite.conf');
});

test('render the expected tree when an array of paths is passed', () => {
  const paths = [
    '/home/michel/photos/wallaper.png',
    '/etc/passwd',
    '/etc/nginxconf.d/website.conf',
    '/home/michel/cv.pdf',
    '/etc/hosts',
    '/home/michel/photos/profile.png',
    '/home/michel'
  ];
  expect(renderTree(paths)).toBe(
  '\netc\n\thosts\n\tnginxconf.d\n\t\twebsite.conf\n\tpasswd' +
  '\nhome\n\tmichel\n\t\tcv.pdf\n\t\tphotos' +
  '\n\t\t\tprofile.png\n\t\t\twallaper.png');
});
