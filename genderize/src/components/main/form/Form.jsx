import TextInput from './TextInput';
import Button from './Button';
import './Form.css';

function Form({
  parameters: {
    className,
    children: { input, button },
  },
  onSubmit,
  onInput,
}) {
  return (
    <form className={className} onSubmit={onSubmit}>
      <TextInput parameters={input} onInput={onInput} />
      <Button parameters={button} />
    </form>
  );
}

export default Form;
