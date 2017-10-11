if (process.argv.length < 4) {
  console.log("You need a Repo owner and a Repo name in the respective order");
  return;
}
require('dotenv').config();
var request = require('request');
var fs = require('fs');
console.log("Welcome to the GitHub Avatar Downloader!");
var repoOwner = process.argv[2];
var repoName = process.argv[3];
var requestURL = 'https://' + process.env.DB_GITHUB_USER + ':' + process.env.DB_GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

function getRepoContributors(repoOwner, repoName, cb) {
  request.get(options, function(err, response, body) {
    var data = JSON.parse(body);
    data.forEach(function(profile) {
      if (!fs.existsSync("./avatars")) {
        fs.mkdirSync("./avatars");
      }
      cb(profile.avatar_url, "avatars/" + profile.login + ".jpg");
    });
  });
}

const options = {
  url: requestURL,
  headers: {
    'user-agent': process.env.DB_GITHUB_USER
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