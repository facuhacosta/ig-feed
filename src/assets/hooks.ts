'use client'
import { useState, useEffect } from "react"

export function useLocalStorage(uniqueKey: string) {
  const [currentValue, setCurrentValue] = useState<boolean>(false)
  
  useEffect(() => {
    const firstValue = localStorage.getItem(uniqueKey)
    if (typeof firstValue === 'string') {
      setCurrentValue(JSON.parse(firstValue))
    } else {
      setCurrentValue(false)
    }
  },[])

  useEffect(() => {
    localStorage.setItem(uniqueKey, JSON.stringify(currentValue))
  },[currentValue])

  const setItem = (newValue: boolean) => {
    setCurrentValue(newValue)
  }

  return {
    currentValue,
    setItem,
  }
}