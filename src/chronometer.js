class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(()=> {
      if(printTimeCallback) {printTimeCallback()
        }
        this.currentTime ++}, 1000
    )
  } 

  getMinutes() {
    return Math.floor(this.currentTime/60)
  }

  getSeconds() {
   return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    if(value > 9) return value.toString();
    return "0" + value;
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    return this.currentTime = 0;
  }

  split() {
       let min = this.computeTwoDigitNumber(this.getMinutes())
       let seg = this.computeTwoDigitNumber(this.getSeconds())

    return `${min}:${seg}`
  }
}
