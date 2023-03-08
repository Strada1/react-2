import { PREFIX, VALUE } from '../../core/constants';
import './Input.css';

function InputError() {
  return <span className={PREFIX.ERROR}>{VALUE.INPUT_ERROR}</span>;
}

export { InputError };
