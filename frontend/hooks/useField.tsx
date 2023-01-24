import { ChangeEvent, useState } from 'react'

type UseFieldProps = { type: string }
type UseFieldParameters = {
  type: string
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const useField = ({ type }: UseFieldProps): UseFieldParameters => {
  const [value, setValue] = useState('')
  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value)
  }
  return { type, value, onChange }
}

export default useField
