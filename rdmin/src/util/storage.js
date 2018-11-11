export function getLocalStorage (key) {
  return window.localStorage.getItem(key)
}

export function setLocalStorage(key, value) {
  window.localStorage.setItem(key, value)
}

export function isHaveStorage(key) {
  if (window.localStorage.getItem(key) === null) {
    return false
  }
  return true
}

export function removeLocalStorage(key) {
  window.localStorage.removeItem(key)
}

export function clearLocalStorage() {
  window.localStorage.clear()
}
