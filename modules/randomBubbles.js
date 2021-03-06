/*
This Module plugin adds random visual bubbles to each scene.
It creates an SVG canvas and add circles in it.
Colors are inherited by the choosen scheme colors of the presentation.
Possible settings are: 
- number of circles to be used
- color or array of colors to be used
- opacity or opacity range to be randomized
*/
function randomBubbles(sceneElement, modConfig, sceneConfig){

    // in case a specific scene doesn't want this effect
    if(!modConfig) return

    // options
    var num = 10
    var col = 'var(--colorFore)'
    var opc = 1
    var size = [0.5, 5]

    switch(typeof modConfig){
        case 'number':
            num = modConfig
            break

        case 'object':
            num = modConfig.amount || num
            col = modConfig.color || col
            opc = modConfig.opacity || opc
            size = modConfig.size || size
            break
    }

    // create the data source for the circles generation
    const list = []
    for(var i = 0; i < num; ++i){
        const x = Math.random()*100
        const y = Math.random()*100
        const o = Array.isArray(opc) ? opc[0] + Math.random() * (opc[1]-opc[0]) : opc
        
        var c = col
        if(Array.isArray(col)){
            const idx = parseInt(Math.random()*col.length)
            c = col[idx]
        }

        var r = Array.isArray(size) ? size[0] + Math.random() * (size[1]-size[0]) : size
        
        list.push(`<circle opacity="${o}" fill="${c}" r="${r}" cx="${x}" cy="${y}"></circle>`)
    }

    // create the svg fragment
    const parser = new DOMParser()
    const str = `<svg style="width:100%;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        ${list.map(d => (d))}
    </svg>`

    const frag = parser.parseFromString(str, 'text/html').body.childNodes[0]
    const front = sceneElement.querySelector('.frontContainer')
    front.append(frag)

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 2000)
    })

}

Presenta.addModule('randomBubbles', randomBubbles)