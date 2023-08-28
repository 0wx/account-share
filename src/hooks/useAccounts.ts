import { atom, useAtom } from 'jotai'
import axios from 'axios'

enum RuleType {
  includes = 'includes',
  excludes = 'excludes',
}

export interface Rule {
  id: number
  contains?: string
  startsWith?: string
  endsWith?: string
  domain?: string
  type: RuleType
}

export interface Account {
  id: number
  name: string
  email: string
  rules: Rule[]
}

export type AccountList = Omit<Account, 'email'>

const accountsAtom = atom<Account[]>([])
const accountListAtom = atom<AccountList[]>([])

export const useAccounts = () => {
  const [accounts, setAccounts] = useAtom(accountsAtom)
  const [accountList, setAccountList] = useAtom(accountListAtom)

  const fetchAccounts = async () => {
    try {
      const { data } = await axios.get<Account[]>(
        'https://account-share-api.devhaus.me/accounts'
      )
      setAccountList(data)
    } catch (error) {
      console.log(error)
    }
  }

  const getAccounts = () => {
    return new Promise((resolve, reject) => {
      chrome.storage.sync.get('accounts', (result) => {
        setAccounts((result?.accounts as Account[]) || [])
        resolve((result?.accounts as Account[]) || [])
      })
    })
  }

  const setAccountsToStorage = (accounts: Account[]) => {
    return new Promise((resolve, reject) => {
      chrome.storage.sync.set({ accounts }, () => {
        setAccounts(accounts)
        resolve(accounts)
      })
    })
  }

  const addAccount = (account: Account) => {
    return new Promise((resolve, reject) => {
      chrome.storage.sync.get('accounts', (result) => {
        const accounts = (result?.accounts as Account[]) || []
        accounts.push(account)
        setAccounts(accounts)
        chrome.storage.sync.set({ accounts }, () => {
          resolve(accounts)
        })
      })
    })
  }

  const clearAccounts = () => {
    return new Promise((resolve, reject) => {
      chrome.storage.sync.remove('accounts', () => {
        setAccounts([])
        resolve([])
      })
    })
  }

  const removeAccount = (account: Account) => {
    return new Promise((resolve, reject) => {
      chrome.storage.sync.get('accounts', (result) => {
        const accounts = (result?.accounts as Account[]) || []
        const newAccounts = accounts.filter((acc) => acc.id !== account.id)
        setAccounts(newAccounts)
        chrome.storage.sync.set({ accounts: newAccounts }, () => {
          resolve(newAccounts)
        })
      })
    })
  }


  return {
    accounts,
    accountList,
    getAccounts,
    setAccountsToStorage,
    clearAccounts,
    addAccount,
    fetchAccounts,
    removeAccount,
  }
}
