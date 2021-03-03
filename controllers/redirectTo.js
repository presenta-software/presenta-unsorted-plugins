const redirectTo = function (rootElement, router, ctrlConfig, projectConfig) {
    router.on('end', e => {
        location.href = ctrlConfig
    })
}

Presenta.addController('redirectTo', redirectTo)