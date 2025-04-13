class ApiResponse {
  static success(statusCode, data = {}, message = 'All good') {
    return {
      status: 'success',
      statusCode,
      data,
      message,
    };
  }

  static error(statusCode, error = [], message = 'Error') {
    return {
      status: 'error',
      statusCode,
      error,
      message,
    };
  }
}

export default ApiResponse;
