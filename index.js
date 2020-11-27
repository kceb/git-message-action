const core = require('@actions/core');
const { exec } = require('child_process');

try {
  const sha = core.getInput('sha') || process.env.GITHUB_SHA;
  exec(`git log --format=%B -n 1 ${sha}`, (err, stdout, stderr) => {
    if (err) {
      throw err;
    }
    core.setOutput("git-message", stdout);

    const lines = stdout.split("\n");
    const title = lines.shift();
    const body = lines.join("\n");
    core.setOutput("title", title);
    core.setOutput("body", body);
  });
} catch (error) {
  core.setFailed(error.message);
}