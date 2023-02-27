function TextInput({
  parameters: {
    type, className, placeholder, name,
  },
  onInput,
}) {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      name={name}
      onInput={onInput}
    />
  );
}

export default TextInput;
