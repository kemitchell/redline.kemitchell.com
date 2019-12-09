/* eslint-env browser */
/* global CodeMirror */

document.addEventListener('DOMContentLoaded', onContentLoaded)

function onContentLoaded () {
  var configuration = {
    lineWrapping: true,
    spellcheck: true
  }
  window.left = CodeMirror(
    document.getElementById('left'),
    Object.assign({ autofocus: true }, configuration)
  )
  window.right = CodeMirror(
    document.getElementById('right'),
    configuration
  )
}
