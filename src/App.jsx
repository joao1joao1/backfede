import { useState } from "react"
import { CardInicial } from "./components/CardInicial"
import { CardFinal } from "./components/CardFinal"

export function App() {
  const [submited, setSubmited] = useState(false)
  const [rateNote, setRateNote] = useState(0)
// ddddddd

  return (
      submited === false? (
        <CardInicial setRateNote={setRateNote} setSubmited={setSubmited} rateNote={rateNote}/>
      ) : (
        <CardFinal rateNote={rateNote}/>
      )
  )
}