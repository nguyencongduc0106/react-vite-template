import { Dispatch, SetStateAction, useEffect, useState } from 'react'

type Value = string | number
type UseDebounce = [Value, Dispatch<SetStateAction<Value>>, Value]

export function useDebounce(delay = 500): UseDebounce {
  const [value, setValue] = useState<Value>('')
  const [debounceValue, setDebounceValue] = useState<Value>('')

  useEffect(() => {
    const handler = setTimeout(() => setDebounceValue(value), delay)
    return () => clearTimeout(handler)
  })

  return [value, setValue, debounceValue]
}
