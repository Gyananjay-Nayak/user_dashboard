function checkHttpStatus(response) {
  if (response.status >= 500 && response.status < 600) {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  } else {
    return response;
  }
}

export default checkHttpStatus;

export const BASE_URL = `${process.env.REACT_APP_API_URL}`;
