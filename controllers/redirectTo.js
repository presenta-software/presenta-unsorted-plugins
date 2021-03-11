/*
This Controller plugin adds a redirectTo function when the user reaches the end of the presentation.
It exploits the 'end' event of the internal Router to do that.
*/
const redirectTo = function (rootElement, router, ctrlConfig, projectConfig) {
  router.on('end', e => {
    location.href = ctrlConfig
  })
}

Presenta.addController('redirectTo', redirectTo)
