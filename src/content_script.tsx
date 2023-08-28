import io from 'socket.io-client'
import { getAccounts, getUser } from './libs/chrome'

const main = async () => {
  const accounts = await getAccounts()
  const user = await getUser()

  const host = window.location.host

  const rules = accounts
    .map((account) => {
      return account.rules
        .map((rule) => {
          return {
            ...rule,
            account,
            user,
          }
        })
    })
    .flat()

  console.log(rules)
  const matchedRules = rules.find((rule) => {
    if(!rule.domain) return false
    return host.endsWith(rule.domain)
  })

  if(!matchedRules) return

  const socket = io('https://account-share-api.devhaus.me')
  socket.emit('opened', matchedRules)


}

main()