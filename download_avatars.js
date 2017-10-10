if (process.argv.length < 4) {
  console.log("You need a Repo owner and a Repo name in the respective order");
  return;
}

var request = require('request');
var fs = require('fs');
console.log("Welcome to the GitHub Avatar Downloader!");
var repoOwner = process.argv[2];
var repoName = process.argv[3];
var GITHUB_USER = "ShaneRichman";
var GITHUB_TOKEN = "f4911c5a1d18f7eb9266b91883cce9ac79e91bb4";
var requestURL = 'https://' + GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

function getRepoContributors(repoOwner, repoName, cb) {
  request.get(options, function(err, response, body) {
    var data = JSON.parse(body);
    data.forEach(function(profile) {
      cb(profile.avatar_url, "avatars/" + profile.login + ".jpg");
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
getRepoContributors(repoOwner, repoName, downloadImageByURL);