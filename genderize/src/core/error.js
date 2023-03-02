class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }

  static nameRegex = /^(?=.{3,20}$)[a-z]+(?:['_.\s][a-z]+)*$/i;

  static ERROR = {
    INCORRECT_NAME: 'Please enter a correct name.',
    NOT_FOUND: 'Oops, we can\'t find a match',
    NOT_RESPONDING: 'Oops! Server disconnected.',
  };

  static logMyErrors = (error) => (error instanceof TypeError
    ? console.log(CustomError.ERROR.NOT_RESPONDING)
    : console.log(error.message));
}

export default CustomError;
