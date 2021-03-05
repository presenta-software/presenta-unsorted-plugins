/*
This Block plugin create an SVG colored circle in the middle of the block area.

USAGE: add this block config
{type: 'aCircle', color: 'blue'}
*/
function aCircle(blockElement, blockConfig){
    
    // check the options
    const color = blockConfig.color || 'black'
    
    // create the SVG fragment
    const str = `<svg style="width:100%;height:100%;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <circle fill="${color}" r="20" cx="50" cy="50"></circle>
    </svg>`

    // convert to a proper DOM fragment
    const parser = new DOMParser()
    const frag = parser.parseFromString(str, 'text/html').body.childNodes[0]
    
    // append it to the block container
    blockElement.append(frag)
}

Presenta.addBlock('aCircle', aCircle)