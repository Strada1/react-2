import {
  TASK_KEY, TYPE, VALUE, TITLE, CLASS,
} from '../../core/constants';
import './Input.css';

function Input() {
  return (
    <label className={`${CLASS.LABEL}-${TASK_KEY.TEXT}`}>
      {TITLE.TASK}
      <input
        type={TYPE.INPUT.TEXT}
        name={TYPE.INPUT.TEXT}
        className={`${CLASS.INPUT}-${CLASS.TASK}`}
        placeholder={TITLE.PLACEHOLDER}
        autoComplete={VALUE.OFF}
      />
    </label>
  );
}

export { Input };
