(() => {
  function setup() {
    const canvas = document.querySelector('#falling-snow-canvas')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    return {
      canvas,
      canvasContext: canvas.getContext('2d'),
      numberOfSnowBalls: 250
    }
  }
  function run() {
    setup()
  }
  run()
console.log(setup().canvas)})()
