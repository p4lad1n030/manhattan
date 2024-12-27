import { InputHTMLAttributes } from "react"

interface IInputComponent extends InputHTMLAttributes<HTMLInputElement> {

}

const Input = (props: IInputComponent) => {
  return (
    <input className="border-2 md:w-3/4 shadow-lg h-9 rounded-md outline-none px-2 mb-3 placeholder:font-robotoc" {...props} />

  )
}

export default Input