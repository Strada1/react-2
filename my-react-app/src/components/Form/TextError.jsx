function TextError({ value }) {
  const reg = /[^a-z]/i;
  return (
    <ul className="genderize__error">
      {value.match(reg) && <li>В строке неподходящие символы</li>}
      {value.length < 2 && <li>Недостаточно символов</li>}
      {value.length > 29 && <li>Слишком много символов</li>}
    </ul>
  );
}

export default TextError;
