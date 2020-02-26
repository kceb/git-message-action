const core = require('@actions/core');
const github = require('@actions/github');
const { exec } = require('child_process');

try {
  const sha = core.getInput('sha') || process.env.GITHUB_SHA;
  exec(`git log --format=%B -n 1 ${sha}`, (err, stdout, stderr) => {
    if (err) {
      throw err;
    }
    core.setOutput("git-message", stdout);
  });
} catch (error) {
  core.setFailed(error.message);
}