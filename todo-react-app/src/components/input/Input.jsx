import { dateAction } from '../../core/utils';
import {
  TASK_KEY, TYPE, VALUE, TITLE, CLASS,
} from '../../core/constants';
import './Input.css';

const inputProps = {};

const defineProps = ({
  changeTask, onBlur, id, setDateError,
}, type) => {
  try {
    inputProps.onBlur = onBlur;

    switch (type) {
      case TYPE.INPUT.RADIO:
        inputProps.onChange = ({ target }) => changeTask(id, TASK_KEY.PRIORITY, target.value);
        return inputProps;
      case TYPE.INPUT.DATETIME_LOCAL:
        inputProps.onChange = ({ target }) => {
          if (dateAction.check(target.value)) return setDateError();
          const date = !target.value ? VALUE.DEFAULT : dateAction.convert(target.value);
          return changeTask(id, TASK_KEY.DATE, date);
        };
        return inputProps;
      default:
        return inputProps;
    }
  } catch (error) {
    console.error(error.message);
    return inputProps;
  }
};

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

export { Input, defineProps, inputProps };
