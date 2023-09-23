"use client"

/**
 * Get from Local Storage
 * @param key Name of the localStorage you wish to retrieve
 * @returns Parsed JSON string
 */
const getLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    if (window.localStorage.getItem(key) === null) {
      return [{complete: true, completeDate: "2030-09-02", desc: "Test", deadline: "2040-09-20", id: "Test1", title: "Test1"}, {complete: false, completeDate: "2030-09-02", desc: "Test", deadline: "2040-09-20",id: "Test2", title: "Test2"}]
    } else {
      return JSON.parse(window.localStorage.getItem(key)!)
    }
  } else {
    return [{complete: true, completeDate: "2030-09-02", desc: "Test", deadline: "2040-09-20", id: "Test1", title: "Test1"}, {complete: false, completeDate: "2030-09-02", desc: "Test", deadline: "2040-09-20",id: "Test2", title: "Test2"}]
  }
}

export default getLocalStorage