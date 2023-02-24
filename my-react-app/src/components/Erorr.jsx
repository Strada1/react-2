function Error(props) {
  const text = props?.value;
  const reg = /[^a-z]/i;
  return (
    <ul className="genderize__error">
      {text.match(reg) && <li>В строке неподходящие символы</li>}
      {text.length < 2 && <li>Недостаточно символов</li>}
      {text.length > 29 && <li>Слишком много символов</li>}
    </ul>
  );
}

export default Error;
