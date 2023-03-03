function TextInput({ className, onChange, value }) {
  return (
    <input
      type="text"
      className={className}
      onChange={onChange}
      value={value}
    />
  );
}

export default TextInput