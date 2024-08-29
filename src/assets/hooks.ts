'use client'
import { useState, useEffect } from "react"

export function useLocalStorage(uniqueKey: string) {
  const [currentValue, setCurrentValue] = useState<boolean>(false)
  
  useEffect(() => {
    updateValue(uniqueKey)
  },[])

  const updateValue = (key: string) => {
    const updatedValue = localStorage.getItem(key)
    if (typeof updatedValue === 'string') {
      setCurrentValue(JSON.parse(updatedValue))
    } else {
      setCurrentValue(false)
    }
  }

  const setItem = (newValue: boolean) => {
    localStorage.setItem(uniqueKey, JSON.stringify(currentValue))
    setCurrentValue(newValue)
  }

  return {
    currentValue,
    setItem,
    updateValue
  }
}