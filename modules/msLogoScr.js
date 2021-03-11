/*
A Block plugin that overimpose an image floating on the screen reminding the original MS Logo ScreenSaver

Options:
- url: the image path to show
- size: the size in pixels, default 100
- delay: the millisecond of delay to begin the animation
*/
function msLogoScr (sceneElement, modConfig) {
  // options and defaults
  const url = modConfig.url
  const size = modConfig.size || 100
  const delay = modConfig.delay || 0
  let animationHandler

  // fragment
  const str = `<div style="top:0;left:0;position:absolute;width:${size}px;height:${size}px;"><img style="width:100%;height:100%;" src="${url}" /></div>`
  const parser = new DOMParser()
  const el = parser.parseFromString(str, 'text/html').body.childNodes[0]

  // create the animation
  var run = () => {
    sceneElement.append(el)

    const bb = sceneElement.getBoundingClientRect()

    const width = bb.width
    const height = bb.height

    let x = 0
    let y = 0
    const w = size
    const h = size

    let vx
    let vy

    x = width / 2 - w / 2
    y = height / 2 - h / 2

    vx = Math.random() * 6 - 3
    vy = Math.random() * 6 - 3

    var loop = () => {
      x += vx
      y += vy

      if (x > width - w) {
        x = width - w
        vx = vx * -1
      }
      if (y > height - h) {
        y = height - h
        vy = vy * -1
      }

      if (x < 0) {
        x = 0
        vx = vx * -1
      }
      if (y < 0) {
        y = 0
        vy = vy * -1
      }

      el.style.transform = `translate(${x}px, ${y}px)`

      animationHandler = window.requestAnimationFrame(loop)
    }
    loop()
  }

  setTimeout(run, delay)

  this.destroy = () => {
    window.cancelAnimationFrame(animationHandler)
  }
}

Presenta.addModule('msLogoScr', msLogoScr)
