import { useState, useEffect } from "react"

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      if (typeof window !== "undefined") {
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : initialValue
      }
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue]
}

export function useDarkMode() {
  const [isDark, setIsDark] = useLocalStorage("theme")
  const parsed = isDark ? JSON.parse(isDark) : isDark

  useEffect(() => {
    document.body.classList.toggle("dark", parsed)
  }, [parsed])

  return { isDark: parsed, setIsDark }
}
