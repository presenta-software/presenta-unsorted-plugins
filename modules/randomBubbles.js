/*
This Module plugin adds random visual bubbles to each scene.
It creates an SVG canvas and add circles in it.
Colors are inherited by the choosen scheme colors of the presentation.
Possible settings are: 
- amount of circles to be used
- color or array of colors to be used, picked randomly
- opacity or opacity range to be randomized
- size or size range to be randomized
*/
function randomBubbles(sceneElement, modConfig, sceneConfig){

    // handle the options and defaults
    var amount = 10
    var color = ['var(--colorFore)', 'var(--colorAccent)']
    var opacity = [0.2, 0.6]
    var size = [0.5, 15]

    switch(typeof modConfig){
        case 'number':
            amount = modConfig
            break

        case 'object':
            amount = modConfig.amount || amount
            color = modConfig.color || color
            opacity = modConfig.opacity || opacity
            size = modConfig.size || size
            break
    }

    // create the data source for the circles generation
    const list = []
    for(var i = 0; i < amount; ++i){
        const x = Math.random()*100
        const y = Math.random()*100
        const o = Array.isArray(opacity) ? opacity[0] + Math.random() * (opacity[1]-opacity[0]) : opacity
        
        var c = color
        if(Array.isArray(color)){
            const idx = parseInt(Math.random()*color.length)
            c = color[idx]
        }

        var r = Array.isArray(size) ? size[0] + Math.random() * (size[1]-size[0]) : size
        
        list.push(`<circle opacity="${o}" fill="${c}" r="${r}" cx="${x}" cy="${y}"></circle>`)
    }

    const parser = new DOMParser()
    const str = `<svg style="width:100%;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        ${list.map(d => (d))}
    </svg>`

    const frag = parser.parseFromString(str, 'text/html').body.childNodes[0]
    const front = sceneElement.querySelector('.frontContainer')

    // append to the container
    front.append(frag)
}

// register the module with its unique namespace
Presenta.addModule('randomBubbles', randomBubbles)