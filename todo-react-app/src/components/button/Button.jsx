import { CLASS, TYPE } from '../../core/constants';
import './Button.css';

function Button(props) {
  const {
    children, submit, option, id, onClick,
  } = props;

  return (
    <label>
      <button
        type={submit || TYPE.BUTTON}
        className={CLASS.BUTTON}
        onClick={submit ? null : () => onClick(id, option)}
      >
        {children}
      </button>
    </label>
  );
}

export { Button };
