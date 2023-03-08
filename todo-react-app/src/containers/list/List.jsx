import { useState } from 'react';
import { CheckboxInput } from '../../components/input/checkbox/CheckboxInput';
import { DateTimeInput } from '../../components/input/date/DateTimeInput';
import { RadioInput } from '../../components/input/radio/RadioInput';
import { Priority } from '../priority/Priority';
import { Wrapper } from '../wrapper/Wrapper';
import { IconSvg } from '../../components/icon-svg/IconSvg';
import { Button } from '../../components/button/Button';
import {
  ACTION, ICON, PRIORITY, CLASS,
} from '../../core/constants';
import './List.css';

const defineIcon = (status) => (status ? ICON.CIRCLE_ARROW : ICON.CHECK);

function List(props) {
  const {
    list, title, className, deleteTask, changeTask, setDateError,
  } = props;

  const [priorityChange, setPriorityChange] = useState({ toggle: false });
  const [dateChange, setDateChange] = useState({ toggle: false });

  const handlerPriority = (id) => setPriorityChange({ id, toggle: !priorityChange.toggle });
  const handlerDate = (id) => setDateChange({ id, toggle: !dateChange.toggle });

  const trackDisappearanceFocus = () => {
    setPriorityChange({ toggle: false });
    setDateChange({ toggle: false });
  };

  return (
    <section className={className}>
      <h2 className={`${CLASS.SECTION}-${CLASS.TITLE}`}>{title}</h2>
      <ul className={`${CLASS.SECTION}-${CLASS.LIST}`}>
        {list && list.map(
          ({
            id, status, priority, text, date,
          }) => (
            <li className={`${CLASS.TASK}-${CLASS.CONTAINER}`} key={id}>
              {dateChange.toggle && dateChange.id === id
              && (
              <DateTimeInput {...{
                onBlur: trackDisappearanceFocus,
                setDateError,
                changeTask,
                id,
              }}
              />
              )}
              {priorityChange.toggle && priorityChange.id === id && (
              <Priority className={ACTION.CHANGE}>
                {PRIORITY.map(
                  (option) => (
                    <RadioInput {...{
                      key: option,
                      onBlur: trackDisappearanceFocus,
                      changeTask,
                      option,
                      id,
                    }}
                    />
                  ),
                )}
              </Priority>
              )}
              <Wrapper prefix={CLASS.TASK}>
                <Button {...{
                  option: ACTION.CHANGE,
                  handlerPriority,
                  priority,
                  id,
                }}
                >
                  <IconSvg {...{ icon: ICON.LIGHTNING, option: priority }} />
                </Button>
                <span className={CLASS.TASK}>{text}</span>
                <div className={CLASS.OPTIONS}>
                  <Button {...{ handlerDate, id, option: ACTION.UPDATE }}>
                    {!date ? <IconSvg icon={ICON.CALENDAR} /> : date}
                  </Button>
                  <CheckboxInput {...{ changeTask, status, id }}>
                    <IconSvg icon={defineIcon(status)} />
                  </CheckboxInput>
                  <Button {...{ deleteTask, id, option: ACTION.DELETE }}>
                    <IconSvg icon={ICON.CROSS} />
                  </Button>
                </div>
              </Wrapper>
            </li>
          ),
        )}
      </ul>
    </section>
  );
}

export { List };
