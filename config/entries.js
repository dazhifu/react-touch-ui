var paths = require('./paths');

var walkSync = function(dir, filelist) {
  if(dir[dir.length-1] != '/') {
    dir = dir.concat('/');
  }
  var fs = fs || require('fs'),
      files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    filelist.push(file);
  });
  return filelist;
};

var entries = walkSync(paths.entries);

module.exports = entries;