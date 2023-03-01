(() => {
  // 1. Lexical scope & Dynamic scope

  // function printName(params) {
  //   console.log(this)
  // }

  // printName()

  // 2. How to know what is "this"?
  function printName(params) {
    console.log(this)
  }
  // 2.1 Invoken object
  const varayut = { name: 'Varayut', printName }
  const jane = { name: 'Jane', printName }

  jane.printName()
})()
