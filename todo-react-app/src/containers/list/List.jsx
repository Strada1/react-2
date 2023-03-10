import { CheckboxInput } from '../../components/input/checkbox/CheckboxInput';
import { DateTimeInput } from '../../components/input/date/DateTimeInput';
import { RadioInput } from '../../components/input/radio/RadioInput';
import { Priority } from '../priority/Priority';
import { Wrapper } from '../wrapper/Wrapper';
import { IconSvg } from '../../components/icon-svg/IconSvg';
import { Button } from '../../components/button/Button';
import { defineIcon } from '../../core/utils';
import {
  ACTION, ICON, PRIORITY, CLASS, TASK_KEY,
} from '../../core/constants';
import './List.css';

function List(props) {
  const {
    list, title, className, deleteTask, changeTask, change, openSetting, setDateError,
  } = props;

  return (
    <section className={className}>
      <h2 className={`${CLASS.SECTION}-${CLASS.TITLE}`}>{title}</h2>
      <ul className={`${CLASS.SECTION}-${CLASS.LIST}`}>
        {list && list.map(
          ({
            id, status, priority, text, date,
          }) => (
            <li className={`${CLASS.TASK}-${CLASS.CONTAINER}`} key={id}>
              <Wrapper prefix={CLASS.TASK}>
                <Button {...{ option: TASK_KEY.PRIORITY, onClick: openSetting, id }}>
                  <IconSvg {...{ icon: ICON.LIGHTNING, option: priority }} />
                </Button>
                <span className={CLASS.TASK}>{text}</span>
                <div className={CLASS.OPTIONS}>
                  <Button {...{ option: TASK_KEY.DATE, onClick: openSetting, id }}>
                    {!date ? <IconSvg icon={ICON.CALENDAR} /> : date}
                  </Button>
                  <CheckboxInput {...{ changeTask, status, id }}>
                    <IconSvg icon={defineIcon(status)} />
                  </CheckboxInput>
                  <Button {...{ onClick: deleteTask, id }}>
                    <IconSvg icon={ICON.CROSS} />
                  </Button>
                </div>
              </Wrapper>
              {change.date && change.taskId === id
              && (
              <DateTimeInput {...{ setDateError, changeTask, id }} />
              )}
              {change.priority && change.taskId === id && (
              <Priority className={ACTION.CHANGE}>
                {PRIORITY.map(
                  (option) => (
                    <RadioInput {...{
                      key: option,
                      changeTask,
                      option,
                      id,
                    }}
                    />
                  ),
                )}
              </Priority>
              )}
            </li>
          ),
        )}
      </ul>
    </section>
  );
}

export { List };
