import { useEffect } from "react"
import useLocalStorage from "react-use-localstorage"

export function useDarkMode() {
  const [isDark, setIsDark] = useLocalStorage("theme")

  useEffect(() => {
    document.body.classList.toggle("dark", JSON.parse(isDark))
  }, [isDark])

  return { isDark: JSON.parse(isDark), setIsDark }
}
