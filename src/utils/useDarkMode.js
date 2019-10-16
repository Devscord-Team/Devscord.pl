import { useEffect, useState } from "react"

export function useDarkMode() {
  const [isDark, setIsDark] = useState(
    JSON.parse(
      typeof window !== "undefined" && window.localStorage.getItem("theme")
    ) || false
  )
  useEffect(() => {
    document.body.classList.toggle("dark", isDark)
    localStorage.setItem("theme", JSON.stringify(isDark))
  }, [isDark])

  return { isDark, setIsDark }
}
