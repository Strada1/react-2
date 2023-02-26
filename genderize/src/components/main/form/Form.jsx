import TextInput from './TextInput';
import Button from './Button';
import './Form.css';

function Form({
  parameters: {
    className,
    children: { input, button },
  },
  onSubmit,
}) {
  return (
    <form className={className} onSubmit={onSubmit}>
      <TextInput parameters={input} />
      <Button parameters={button} />
    </form>
  );
}

export default Form;
