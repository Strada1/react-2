import { useState } from 'react';
import { CheckboxInput } from '../../components/input/checkbox/CheckboxInput';
import { DateTimeInput } from '../../components/input/date/DateTimeInput';
import { RadioInput } from '../../components/input/radio/RadioInput';
import { Priority } from '../priority/Priority';
import { Wrapper } from '../wrapper/Wrapper';
import { IconSvg } from '../../components/icon-svg/IconSvg';
import { Button } from '../../components/button/Button';
import {
  ACTION, ICON, PRIORITY, PREFIX,
} from '../../core/constants';
import './List.css';

const defineIcon = (status) => (status ? ICON.CIRCLE_ARROW : ICON.CHECK);

function List(props) {
  const {
    list, changeTask, title, deleteTask, prefix,
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
    <section className={prefix}>
      <h2 className={`${PREFIX.SECTION}-${PREFIX.TITLE}`}>{title}</h2>
      <ul className={`${PREFIX.SECTION}-${PREFIX.LIST}`}>
        {list && list.map(
          ({
            id, status, priority, text, date,
          }) => (
            <li className={`${PREFIX.TASK}-${PREFIX.CONTAINER}`} key={id}>
              {dateChange.toggle && dateChange.id === id
              && (
              <DateTimeInput {...{ changeTask, id, onBlur: trackDisappearanceFocus }} />
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
              <Wrapper prefix={PREFIX.TASK}>
                <Button {...{
                  option: ACTION.CHANGE,
                  handlerPriority,
                  priority,
                  id,
                }}
                >
                  <IconSvg {...{ icon: ICON.LIGHTNING, option: priority }} />
                </Button>
                <span className={PREFIX.TASK}>{text}</span>
                <div className={PREFIX.OPTIONS}>
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
