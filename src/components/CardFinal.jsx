import ilustration from "../assets/illustration-thank-you.svg"

export function CardFinal({rateNote}) {
  return (
    <div className="bg-radial-gradient max-w-103 px-6 pt-6 pb-8 rounded-2xl font-overpass text-center">
          <img src={ilustration} alt="ilustracao de agradecimento" className="mx-auto mb-6"/>

          <p className="mb-6 text-orange bg-dark-blue py-1.25 px-4 rounded-3xl w-fit mx-auto">Você selecionou {rateNote} de 5!</p>

          <h1 className="text-2xl font-bold mb-2.5">Obrigado :</h1>

          <p className="text-light-grey text-sm leading1 ">Agradecemos por dedicar um momento para nos avaliar. Se precisar de mais suporte, não hesite em entrar em contato!</p>
        </div>
  )
}