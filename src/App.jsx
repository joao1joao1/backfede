import { useState } from "react"
import { CardInicial } from "./components/CardInicial"
import { CardFinal } from "./components/CardFinal"

export function App() {
  const [submited, setSubmited] = useState(false)
  const [rateNote, setRateNote] = useState(0)
// ddddddd
  function handleSubmit() {
    if(rateNote !== 0) {
      setSubmited(true)
      return
    }

    alert("Por favor, selecione uma nota")
  }

  function handleChangeRateNote(value) {
    console.log(value)
    setRateNote(value)
  }

  return (
      submited === false? (
        <CardInicial handleChangeRateNote={handleChangeRateNote} handleSubmit={handleSubmit}/>
      ) : (
        <CardFinal rateNote={rateNote}/>
      )
  )
}