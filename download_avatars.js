var request = require('request');
var fs = require('fs');

console.log("Downloading image...");
request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function(err) {
    throw err;
  })
  .on('response', function(response) {
    console.log("Done Downloading!");
    console.log('Response Status Code: ', response.statusMessage, response.headers['content-type']);
  })
  .pipe(fs.createWriteStream('./avatars/stuff.jpg'));

  // GET([index of person]["avatar_url"])