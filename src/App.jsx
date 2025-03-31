import iconStar from "./assets/icon-star.svg"
import { useState } from "react"

export function App() {
  const [submited, setSubmited] = useState(false)
  const [rateNote, setRateNote] = useState(0)

  function handleSubmit() {
    if(rateNote !== 0) {
      setSubmited(true)
      return
    }

    alert("Por favor, selecione uma nota")
  }

  function handleChangeRateNote(value) {
    setRateNote(value)
  }

  console.log(rateNote)

  return (
    <div className="h-svh bg-very-dark-blue text-white flex justify-center items-center px-6">
      {submited === false ?(
          <div className="bg-radial-gradient max-w-103 px-6 pt-6 pb-8 rounded-2xl font-overpass">
          <div className="bg-dark-blue p-4 w-fit rounded-full mb-4">
            <img src={iconStar} alt="icone da estrela" />
          </div>
          
          <h1 className="text-2xl font-bold mb-2.5">Como foi o atendimento?</h1>

          <p className="text-light-grey text-sm leading1 mb-6">Conte-nos como foi nossa ajuda com sua solicitação. Agradecemos muito seu feedback para podermos melhorar nosso atendimento!</p>

          <div className="flex justify-between mb-6">
            <input type="button" value={1} className="rounded-full bg-dark-blue w-10.5 h-10.5 text-sm text-medium-grey font-bold focus:bg-medium-grey focus:text-white" onClick={() => handleChangeRateNote(1)}/>
            <input type="button" value={2} className="rounded-full bg-dark-blue w-10.5 h-10.5 text-sm text-medium-grey font-bold focus:bg-medium-grey focus:text-white" onClick={() => handleChangeRateNote(2)}/>
            <input type="button" value={3} className="rounded-full bg-dark-blue w-10.5 h-10.5 text-sm text-medium-grey font-bold focus:bg-medium-grey focus:text-white" onClick={() => handleChangeRateNote(3)}/>
            <input type="button" value={4} className="rounded-full bg-dark-blue w-10.5 h-10.5 text-sm text-medium-grey font-bold focus:bg-medium-grey focus:text-white" onClick={() => handleChangeRateNote(4)}/>
            <input type="button" value={5} className="rounded-full bg-dark-blue w-10.5 h-10.5 text-sm text-medium-grey font-bold focus:bg-medium-grey focus:text-white" onClick={() => handleChangeRateNote(5)}/>
          </div>

          <button className="bg-orange w-full py-3 rounded-3xl uppercase font-bold tracking1 focus:bg-white focus:text-orange" onClick={handleSubmit}>Enviar</button>
        </div>
      ) : (
        <p>oi</p>
      )}
    </div>
  )
}