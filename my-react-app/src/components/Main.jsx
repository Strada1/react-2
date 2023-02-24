import Button from './Button';
import TextInput from './TextInput';
import Error from './Erorr';

function Main(props) {
  // const error = props?.error;
  return (
    <form className="genderize genderize__form" onSubmit={props?.onSubmit}>
      <TextInput
        onChange={props?.onChange}
        className="genderize__input"
        value={props?.value}
      />
      {props?.error && <Error value={props?.value} />}
      <Button className="genderize__button" text="Узнать" />
    </form>
  );
}

export default Main;
