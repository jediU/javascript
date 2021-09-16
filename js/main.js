import hello, { tuta } from './greet.js'
import { goodMorning, goodAfternoon } from './greetings.js'

window.addEventListener("load", () => {
  const person = {
    first_name: tuta,
    last_name: "Usbal"
  }

  console.log(hello(person))
  console.log(goodMorning(person))
  console.log(goodAfternoon(person))
})

