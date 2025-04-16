export function InputButton({value, handleChangeRateNote}) {
  return (
    <input type="button" value={value} className="rounded-full bg-dark-blue w-10.5 h-10.5 text-sm text-medium-grey font-bold focus:bg-medium-grey focus:text-white" onClick={() => handleChangeRateNote(value)}/>
  )
}