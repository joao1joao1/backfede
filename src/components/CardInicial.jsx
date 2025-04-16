import iconStar from "../assets/icon-star.svg"
import { InputButton } from "./InputButton"

export function CardInicial({ handleChangeRateNote, handleSubmit }) {
  return (
    <div className="bg-radial-gradient max-w-103 px-6 pt-6 pb-8 rounded-2xl font-overpass">
          <div className="bg-dark-blue p-4 w-fit rounded-full mb-4">
            <img src={iconStar} alt="icone da estrela" />
          </div>
          
            <h1 className="text-2xl font-bold mb-2.5">Como foi o atendimento?</h1>

            <p className="text-light-grey text-sm leading1 mb-6">Conte-nos como foi nossa ajuda com sua solicitação. Agradecemos muito seu feedback para podermos melhorar nosso atendimento!</p>

            <div className="flex justify-between mb-6">
                <InputButton value={1} handleChangeRateNote={handleChangeRateNote}/>
                <InputButton value={2} handleChangeRateNote={handleChangeRateNote}/>
                <InputButton value={3} handleChangeRateNote={handleChangeRateNote}/>
                <InputButton value={4} handleChangeRateNote={handleChangeRateNote}/>
                <InputButton value={5} handleChangeRateNote={handleChangeRateNote}/>
            </div>

            <button class="bg-orange w-full py-3 rounded-3xl uppercase font-bold tracking1 focus:bg-white focus:text-orange" onClick={handleSubmit}>Enviar</button>
        </div>
  )
}