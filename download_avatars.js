var request = require('request');
var fs = require('fs');
console.log("Welcome to the GitHub Avatar Downloader!");
var repoOwner = process.argv[2];
var repoName = process.argv[3];
var GITHUB_USER = "ShaneRichman";
var GITHUB_TOKEN = "f4911c5a1d18f7eb9266b91883cce9ac79e91bb4";
var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
console.log(requestURL);
function getRepoContributors(repoOwner, repoName, cb) {
  request.get('https://sytantris.github.io/http-examples/future.jpg')
    .on('error', function(err) {
      throw err;
    })
    .on('response', function(response) {
      console.log("Done Downloading!");
      console.log('Response Status Code: ', response.statusMessage, response.headers['content-type']);
    });
}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});