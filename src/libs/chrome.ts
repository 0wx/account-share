import { Account } from "../hooks/useAccounts"
import { User } from "../hooks/useUser"

export const getUser = (): Promise<User> => {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get('user', (result) => {
      resolve(result?.user as User)
    })
  })
}

export const getAccounts = (): Promise<Account[]> => {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get('accounts', (result) => {
      resolve(result?.accounts as Account[])
    })
  })
}