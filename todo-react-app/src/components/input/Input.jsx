import { dateManipulation } from '../../core/utils';
import { IconSvg } from '../icon-svg/IconSvg';
import {
  TAG, TASK_KEY, TYPE, VALUE, INPUT_DATA,
} from '../../core/constants';
import './Input.css';

const defineContent = (props, className) => {
  const {
    type, option, changeTask, id, header, onBlur, status, icon,
  } = props;

  const inputProps = {
    type,
    name: INPUT_DATA[type].name,
    className: !option ? className.input : `${className.input} ${option}`,
  };

  switch (type) {
    case TYPE.INPUT.RADIO:
      inputProps.value = option;
      if (!header) {
        inputProps.onChange = ({ target }) => changeTask(id, TASK_KEY.PRIORITY, target.value);
        inputProps.onBlur = onBlur;
      }
      return (
        <>
          <input {...inputProps} />
          <span>{header ? option : VALUE.DEFAULT}</span>
        </>
      );
    case TYPE.INPUT.CHECKBOX:
      inputProps.checked = status;
      inputProps.onChange = ({ target }) => changeTask(id, TASK_KEY.STATUS, target.checked);
      return (
        <>
          <input {...inputProps} />
          <span />
          <IconSvg icon={icon} option={TYPE.INPUT.CHECKBOX} />
        </>
      );
    case TYPE.INPUT.DATETIME_LOCAL:
      if (!header) {
        inputProps.onBlur = onBlur;
        inputProps.onChange = ({ target }) => {
          if (dateManipulation.check(target.value)) return;
          const date = !target.value ? VALUE.DEFAULT : dateManipulation.convert(target.value);
          changeTask(id, TASK_KEY.DATE, date);
        };
      }
      return (
        <>
          {header ? INPUT_DATA[type].label : VALUE.DEFAULT}
          <input {...inputProps} />
        </>
      );
    default:
      inputProps.placeholder = INPUT_DATA[type].placeholder;
      inputProps.autoComplete = 'off';
      return (
        <>
          {INPUT_DATA[type].label}
          <input {...inputProps} />
        </>
      );
  }
};

function Input(props) {
  const { type, option } = props;

  const className = {
    label: `${TAG.LABEL}-${INPUT_DATA[type].label.toLowerCase()}`,
    input: `${TAG.INPUT}-${INPUT_DATA[type].label.toLowerCase()}`,
  };

  const labelClassName = !option ? className.label : `${className.label} ${option}`;
  const content = defineContent(props, className);

  return <label className={labelClassName}>{content}</label>;
}

export { Input };
