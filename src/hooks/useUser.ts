import { atom, useAtom } from 'jotai'

export type User = {
  name: string
  email: string
}

const userAtom = atom<User | undefined>(undefined)

export const useUser = () => {
  const [user, setUser] = useAtom(userAtom)

  const getUser = () => {
    return new Promise((resolve, reject) => {
      chrome.storage.sync.get('user', (result) => {
        setUser(result?.user as User)
        resolve(result as User)
      })
    })
  }

  const setUserToStorage = (user: User) => {
    return new Promise((resolve, reject) => {
      chrome.storage.sync.set({ user }, () => {
        setUser(user)
        resolve(user)
      })
    })
  }

  const clearUser = () => {
    return new Promise((resolve, reject) => {
      chrome.storage.sync.remove('user', () => {
        setUser(undefined)
        resolve(undefined)
      })
    })
  }

  return {
    user,
    getUser,
    setUserToStorage,
    clearUser,
  }
}



