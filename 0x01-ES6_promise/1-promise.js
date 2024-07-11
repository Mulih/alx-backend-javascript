export default function getFullResponseFromAPI(Success) {
	return new Promise((resolve, reject) => {
		if (Success) {
			resolve({
				status: 200,
				body: 'Success',
			});
		} else {
			reject(new Error('The fke API is not working currently'));
		}
	});
}
