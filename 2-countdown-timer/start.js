(() => {
  const SECOND = 1000
  const MINUTE = SECOND * 60
  const HOUR = MINUTE * 60
  const DAY = HOUR * 24

  function setElementInnerText(id, text) {
    const element = document.getElementById(id)
    element.innerHTML = text
  }

  function countDown() {
    const now = new Date().getTime()
    const newYear = new Date('December 31, 2023 23:59:59').getTime()
    const uniTimerLeft = newYear - now

    setElementInnerText('days', Math.floor(uniTimerLeft / DAY))
    setElementInnerText('hours', Math.floor((uniTimerLeft % DAY) / HOUR))
    setElementInnerText('minutes', Math.floor((uniTimerLeft % HOUR) / MINUTE))
    setElementInnerText('seconds', Math.floor((uniTimerLeft % HOUR) / SECOND))
  }
  function run() {
    countDown()
    setInterval(countDown, SECOND)
  }

  run()
})()
