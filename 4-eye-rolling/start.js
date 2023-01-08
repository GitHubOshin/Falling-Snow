(() => {
  function run() {
    const bodyElem = document.querySelector('body')
    const eyeElems = document.querySelectorAll('.eye')

    function onMouseMove({ pageX, pageY }) {
      eyeElems.forEach((eyeElems) => {
        const { left, top } = eyeElems.getBoundingClientRect()

        const eyeCenterX = left + eyeElems.offsetWidth / 2
        const eyeCenterY = top + eyeElems.offsetWidth / 2
        const radian = Math.atan2(pageX - eyeCenterX, pageY - eyeCenterY)

        const angle = ((radian * 180) / Math.PI) * -1

        eyeElems.style.transform = `rotate(${angle}deg)`
      })
    }

    bodyElem.addEventListener('mousemove', onMouseMove)
  }

  run()
})()
