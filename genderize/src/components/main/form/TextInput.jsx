function TextInput({
  parameters: {
    type, className, placeholder, name,
  },
  onInput,
  value,
}) {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      name={name}
      onInput={onInput}
      value={value}
    />
  );
}

export default TextInput;
