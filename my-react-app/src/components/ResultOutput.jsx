function ResultOutput({ result: { name, gender }, className }) {
  return (
    <div className={className}>
      Полученный результат:
      {gender && <p>{` ${name} is ${gender}`}</p>}
    </div>
  );
}

export default ResultOutput;
