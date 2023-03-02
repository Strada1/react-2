const uiGenderize = {
  h1: {
    className: 'title',
    text: 'Find out if Male or Female name.',
  },
  form: {
    className: 'form',
    children: {
      button: {
        type: 'submit',
        className: 'button',
        text: 'Find out gender',
      },
      input: {
        type: 'text',
        className: 'input',
        placeholder: 'Type any name',
        name: 'name',
      },
      inputError: {
        className: 'input-error',
        text: 'Please enter a correct name.',
      },
    },
  },
  result: {
    className: 'result',
    children: {
      title: {
        className: 'result__title',
        text: 'Your Search Result:',
      },
      block: {
        className: 'result__text-block',
      },
      output: {
        className: 'result__text-output',
        options: {
          genderize: 'genderize',
          male: 'male',
          female: 'female',
          warn: 'warn',
        },
      },
    },
  },
};

const genderize = {
  serverUrl: 'https://api.genderize.io',
  nameRegex: /^(?=.{3,20}$)[a-z]+(?:['_.\s][a-z]+)*$/i,
};

export { uiGenderize, genderize };
