export default function handleRsponseFromAPI(Promise) {
	return Promise
	  .then(() => ({ status: 200, body: 'success' }))
	  .catch(() => new Error())
	  .finally(() => console.log('Got a response from the API'));
}
