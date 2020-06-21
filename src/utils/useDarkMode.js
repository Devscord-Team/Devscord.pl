import { useEffect } from "react"
import useLocalStorage from "react-use-localstorage"

export function useDarkMode() {
  const [isDark, setIsDark] = useLocalStorage("theme")
  const parsed = JSON.parse(isDark)

  useEffect(() => {
    document.body.classList.toggle("dark", parsed)
  }, [isDark])

  return { isDark: parsed, setIsDark }
}
