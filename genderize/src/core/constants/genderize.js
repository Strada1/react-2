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
  nameRegex: /^[а-яА-ЯёЁa-zA-Z]+$/,
};

export { uiGenderize, genderize };
