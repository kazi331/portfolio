/* 
    pointer.js was created by OwL for use on websites, 
     and can be found at https://seattleowl.com/pointer.
*/

const pointer = document.createElement("div")
pointer.id = "pointer-dot"
const ring = document.createElement("div")
ring.id = "pointer-ring"
document.body.insertBefore(pointer, document.body.children[0])
document.body.insertBefore(ring, document.body.children[0])

let mouseX = -100
let mouseY = -100
let ringX = -100
let ringY = -100
let isHover = false
let mouseDown = false
const init_pointer = (options) => {

    window.onmousemove = (mouse) => {
        mouseX = mouse.clientX
        mouseY = mouse.clientY
    }

    window.onmousedown = (mouse) => {
        mouseDown = true
    }

    window.onmouseup = (mouse) => {
        mouseDown = false
    }

    const trace = (a, b, n) => {
        return (1 - n) * a + n * b;
    }
    window["trace"] = trace

    const getOption = (option) => {
        let defaultObj = {
            pointerColor: "#00ffc896",
            ringSize: 10,
            ringClickSize: (options["ringSize"] || 10) - 2,
        }
        if (options[option] === undefined) {
            return defaultObj[option]
        } else {
            return options[option]
        }
    }

    const render = () => {
        ringX = trace(ringX, mouseX, 0.17)
        ringY = trace(ringY, mouseY, 0.17)

        if (document.querySelector(".p-action-click:hover")) {
            pointer.style.borderColor = getOption("pointerColor")
            isHover = true
        } else {
            pointer.style.borderColor = "#00ffc6"
            isHover = false
        }
        ring.style.borderColor = getOption("pointerColor")
        if (mouseDown) {
            ring.style.padding = getOption("ringClickSize") + "px"
        } else {
            ring.style.padding = getOption("ringSize") + "px"
        }

        pointer.style.transform = `translate(${mouseX}px, ${mouseY}px)`
        ring.style.transform = `translate(${ringX - (mouseDown ? getOption("ringClickSize") : getOption("ringSize"))}px, ${ringY - (mouseDown ? getOption("ringClickSize") : getOption("ringSize"))}px)`

        requestAnimationFrame(render)
    }
    requestAnimationFrame(render)
}

init_pointer({});