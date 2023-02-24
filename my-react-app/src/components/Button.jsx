/* eslint-disable react/button-has-type */
function Button(props) {
  const btn = (
    <button className={props?.className}>
      {props?.text}
    </button>
  );
  return btn;
}

export default Button;
