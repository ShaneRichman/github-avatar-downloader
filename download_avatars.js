var request = require('request');
var fs = require('fs');
console.log("Welcome to the GitHub Avatar Downloader!");
var repoOwner = process.argv[2];
var repoName = process.argv[3];
var GITHUB_USER = "ShaneRichman";
var GITHUB_TOKEN = "f4911c5a1d18f7eb9266b91883cce9ac79e91bb4";
var requestURL = 'https://' + GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

console.log(requestURL);

function getRepoContributors(repoOwner, repoName, cb) {
  request.get(options, function(err, response, body) {
    var data = JSON.parse(body);
    data.forEach(function(profile) {
      downloadImageByURL(profile.avatar_url, "avatars/" + profile.login + ".jpg");
    });
  });
}

var options = {
  url: requestURL,
  headers: {
    'user-agent': GITHUB_USER
  }
};


function downloadImageByURL(url, filePath) {
  request.get(url)
    .on('error', function(err) {
      throw err;
    })
    .pipe(fs.createWriteStream(filePath));
}

getRepoContributors("jquery", "jqueryls", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});

downloadImageByURL("https://avatars2.githubusercontent.com/u/2741?v=3&s=466", "avatars/kvirani.jpg");