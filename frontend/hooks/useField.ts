import { ChangeEvent, HTMLInputTypeAttribute, useState } from 'react'

type UseFieldParameters = {
  type: HTMLInputTypeAttribute
  initialValue?: string
  validator?: (value: string) => string
}
type InputProps = {
  type: HTMLInputTypeAttribute
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}
type UseFieldValues = [InputProps, string]

const useField = ({
  type,
  initialValue = '',
  validator = () => ''
}: UseFieldParameters): UseFieldValues => {
  const [value, setValue] = useState(initialValue)
  const [validatorMsg, setValidatorMsg] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value)
    setValidatorMsg(validator(value))
  }

  return [{ type, value, onChange }, validatorMsg]
}

export default useField
