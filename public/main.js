// front end javascript goes here

async function main() {
  // get blockchain state like:
  let state = await getState()
  console.log('current blockchain state:')
  console.log(state)

  // send a transaction like:
  let result = await sendTx({ foo: 'bar' })
  console.log('result of submitting a transaction:')
  console.log(result)
}

main()






// some helper functions for ya:

function getState() {
  return fetch('/state').then(res=>res.json())
}

function sendTx(tx) {
  return fetch('/txs', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify(tx)
  }).then(res => res.json())
}