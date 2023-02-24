import Button from './Button';
import TextInput from './TextInput';
import TextError from './TextError';

function Main(props) {
  return (
    <form className="genderize genderize__form" onSubmit={props?.onSubmit}>
      <TextInput
        onChange={props?.onChange}
        className="genderize__input"
        value={props?.value}
      />
      {props?.error && <TextError value={props?.value} />}
      <Button className="genderize__button" text="Узнать" />
    </form>
  );
}

export default Main;
