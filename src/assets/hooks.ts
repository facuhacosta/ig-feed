import { useState } from "react"

export function useLocalStorage(uniqueKey: string) {
  const [currentValue, setCurrentValue] = useState<boolean>(() => {
    const firstValue = localStorage.getItem(uniqueKey)
    if (typeof firstValue === 'string') {
      return JSON.parse(firstValue)
    }
    return false
  }
  )

  const setItem = (newValue: boolean) => {
    localStorage.setItem(uniqueKey, JSON.stringify(newValue))
    setCurrentValue(newValue)
  }

  return {
    currentValue,
    setItem,
  }
}