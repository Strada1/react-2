import CustomError from './error';

const sendRequest = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new CustomError(CustomError.ERROR.NOT_RESPONDING);
    return await response.json();
  } catch (error) {
    if (error instanceof Error) CustomError.logMyErrors(error.message);
    return error;
  }
};

export default sendRequest;
