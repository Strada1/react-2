function Button({ type, className, text }) {
  const condition = type === 'submit';
  return <button type={condition ? 'submit' : 'button'} className={className}>{text}</button>;
}

export default Button;
