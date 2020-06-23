import { useEffect } from "react"

export function useOnClickOutside(refs, handler) {
  useEffect(() => {
    const listener = event => {
      for (let ref of refs) {
        if (!ref.current || ref.current.contains(event.target)) {
          return
        }
      }

      handler(event)
    }

    document.addEventListener("mousedown", listener)
    document.addEventListener("touchstart", listener)

    return () => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchstart", listener)
    }
  }, [refs, handler])
}
