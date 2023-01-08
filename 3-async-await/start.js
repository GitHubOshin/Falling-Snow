(() => {

  // 1. How Asynchronous code works in JS

  // function simulateAsync1(text, timeout) {
  //   setTimeout(() => console.log(text), timeout)
  // }
  // simulateAsync1('Hi', 1000)
  // simulateAsync1('Privet', 3000)
  // simulateAsync1('Hola', 1500)

  // 2. Callback

  // function simulateAsync2(text, timeout, callback) {
  //   setTimeout(() => {
  //     console.log(text)
  //     if (callback) {
  //       callback()
  //     }
  //   }, timeout)
  // }
  // // simulateAsync2('A', 1000, () => console.log('Callback'))
  // simulateAsync2('Hello', 1000, () => {
  //   simulateAsync2('My name is Oshin.', 1200, () => {
  //     simulateAsync2("I'm learning JavaScript.", 1400)
  //   })
  // })

  // 3. Promise

  // function simulateAsync3(text, timeout) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (text === 'B') return reject('Oops! B got rejected :(')
  //       console.log(text)
  //       resolve()
  //     }, timeout)
  //   })
  // }
  // simulateAsync3('Hi, Promise!', 100)
  //   .then(() => {
  //     return simulateAsync3("I'm Then", 500)
  //   })
  //   .then(() => {
  //     return simulateAsync3('B', 500)
  //   })
  //   .catch((error) => {
  //     console.error(error)
  //   })

  // 4. Async/Await

  // function simulateAsync4(text, timeout) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (text === 'B') return reject('Oops! B got rejected :(')
  //       console.log(text)
  //       resolve()
  //     }, timeout)
  //   })
  // }

  // async function run() {
  //   try {
  //     await simulateAsync4('A', 1000)
  //     await simulateAsync4('B', 100)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  // run()
})()
