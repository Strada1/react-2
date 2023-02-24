function TextInput(props) {
  return (
    <input
      type="text"
      className={props?.className}
      onChange={props?.onChange}
      value={props?.value}
    />
  );
}

export default TextInput;
