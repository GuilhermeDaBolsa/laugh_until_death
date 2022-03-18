const axiosErrorTypes = {
	noResponse: 1,
	hadResponse: 2,
	other: 3,
}

function handleAxiosError(error) {
	const isError = true;
	let errorMessage = "";
	let errorType = 0;

	if (error.response) {
		// Request made and server responded
		errorMessage = "API respondeu com " + error.response.status;
		errorType = axiosErrorTypes.hadResponse;

	} else if (error.request) {
		// The request was made but no response was received
		errorMessage = "Não houve resposta do servidor";
		errorType = axiosErrorTypes.noResponse;

	} else {
		// Something happened in setting up the request that triggered an Error
		errorMessage = error.message;
		errorType = axiosErrorTypes.other;
	}

	return { isError, errorMessage, errorType }
}

module.exports = { axiosErrorTypes, handleAxiosError }