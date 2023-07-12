"use client"

/**
 * Get from Local Storage
 * @param key Name of the localStorage you wish to retrieve
 * @returns Parsed JSON string
 */
const getLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    const parsed = JSON.parse(window.localStorage.getItem(key)!)
    return parsed
  } else {
    return []
  }
}

export default getLocalStorage