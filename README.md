# Git Message Action

This action outputs the git message associated with the current SHA

## Inputs

### `sha`

**Optional** The sha of the commit to get the message for. Defaults to the `GITHUB_SHA` environment variable set by Github.

## Outputs

### `git-message`

The git-message

## Example usage
Without SHA:
```
uses: actions/git-message-action@v1
```

With specified SHA:
```
uses: actions/git-message-action@v1
with:
  sha: '2905893ab6e5f2644201c2abc04e3d83bf317d9b'
```

For more info on how to use outputs: https://help.github.com/en/actions/reference/contexts-and-expression-syntax-for-github-actions#steps-context
