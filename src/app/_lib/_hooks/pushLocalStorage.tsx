/**
 * Handles pushing data to local storage
 * @param key Name of localStorage field
 * @param value New value for local storage
 * @returns 
 */
const pushLocalStorage = (key: string, value: string) => {
  try {
    typeof window !== "undefined" ? localStorage.setItem(key, value) : value
  } catch (error) {
    console.log(error)
  }
  return 'Set Complete'
}

export default pushLocalStorage