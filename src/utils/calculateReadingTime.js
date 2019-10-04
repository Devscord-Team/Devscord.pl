const averageReadingSpeed = 200 // words per minute

export const calculateReadingTime = words =>
  Math.ceil(words / averageReadingSpeed)
