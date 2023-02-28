import CustomError from '../../../core/error';
import './Result.css';

function Result({
  parameters: {
    className,
    children: { title, block, output },
  },
  data: { name, gender },
}) {
  const getResultData = () => {
    const {
      genderize, warn, male, female,
    } = output.options;
    const data = {
      text: gender ? `${name} is ${gender}` : CustomError.ERROR.NOT_FOUND,
      className: block.className,
    };
    if (!gender) {
      data.className += ` ${genderize}-${warn}`;
      return data;
    }
    data.className += gender === male ? ` ${genderize}-${male}` : ` ${genderize}-${female}`;
    return data;
  };

  const data = getResultData();

  const resultBlock = name
    ? <div className={data.className}><span className={output.className}>{data.text}</span></div>
    : <div className={block.className} />;

  return (
    <div className={className}>
      <p className={title.className}>{title.text}</p>
      {resultBlock}
    </div>
  );
}

export default Result;
