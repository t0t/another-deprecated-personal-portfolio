var gm      = require('gm'),
    through = require('through2');

module.exports = function(el) {
  return through.obj( function (originalFile, enc, cb) {
    var file = originalFile.clone(
      {contents: false}
    );

    if (file.isNull()) {
      return cb(null, file);
    }

    var gmfile = gm(file.contents, file.path);
    console.log(gmfile);
    gmfile.size( function (err, size) {

      if(typeof el !== 'undefined') {
        gmfile
          .resize(el.width, (el.width / size.width) * size.height)
          .toBuffer(function (err, buffer) {
            file.contents = buffer;
            cb(null, file);
          });
      } else {
        // remove from stream
        cb(null, null);
      }
    });
  });
};
