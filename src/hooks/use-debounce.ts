import { useEffect, useState } from 'react'

export const useDebounce = (value = '', delay = 1000) => {
  const [debounceValue, setDebounceValue] = useState<string>('')

  useEffect(() => {
    const handler = setTimeout(() => setDebounceValue(value), delay)
    return () => clearTimeout(handler)
  })

  return debounceValue
}
