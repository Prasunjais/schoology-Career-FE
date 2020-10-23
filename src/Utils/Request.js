import _forOwn from 'lodash/forOwn';

export const handleErrorResponse = (err, errorMessage = "Unable to process the request") => {
  if (typeof err.response === "undefined") {
    return {
      errorMessage,
      errors: [],
      responseCode: 500
    }
  }

  //Check if it is JWT authentication error
  if (typeof err.response !== "undefined" && err.response.status === 401) {
    return false;
  }

  let errors = [];

  //Catch all field errors for displaying it
  if (typeof err.response !== "undefined") {

    //Check if this reponse has for error messages
    if (err.response.data.errors) {
      _forOwn(err.response.data.errors, function (value, key) {
        if (typeof value === "string" && key != "") {
          errors.push(value)
        }
      });
    }

    //If error message was available
    if (typeof err.response.data.message !== "undefined") {
      errorMessage = err.response.data.message;
    }

    return {
      errorMessage,
      errors,
      responseCode: err.response.status
    }
  }

  return {
    errorMessage,
    errors: [],
    responseCode: 400
  }
}
