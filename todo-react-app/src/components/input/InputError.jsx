import { CLASS } from '../../core/constants';
import './Input.css';

function InputError({ message }) {
  return <span className={CLASS.ERROR}>{message}</span>;
}

export { InputError };
