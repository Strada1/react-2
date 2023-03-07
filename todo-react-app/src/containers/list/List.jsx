import { useState } from 'react';
import { IconSvg } from '../../components/icon-svg/IconSvg';
import { Button } from '../../components/button/Button';
import { Input } from '../../components/input/Input';
import { Priority } from '../priority/Priority';
import { Wrapper } from '../wrapper/Wrapper';
import {
  ACTION, ICON, TYPE, PRIORITY,
} from '../../core/constants';
import './List.css';

function List(props) {
  const {
    list, changeTask, title, deleteTask,
  } = props;

  const defineIcon = (status) => (status ? ICON.CIRCLE_ARROW : ICON.CHECK);

  const [priorityChange, setPriorityChange] = useState({ toggle: false });
  const [dateChange, setDateChange] = useState({ toggle: false });

  const handlerPriority = (id) => setPriorityChange({ id, toggle: !priorityChange.toggle });
  const handlerDate = (id) => setDateChange({ id, toggle: !dateChange.toggle });

  const trackDisappearanceFocus = () => {
    setPriorityChange({ toggle: false });
    setDateChange({ toggle: false });
  };

  return (
    <section className="section">
      <h2 className="section-title">{title}</h2>
      <ul className="section-list">
        {list && list.map(
          ({
            id, status, priority, text, date,
          }) => (
            <div className="task-container" key={id}>
              {dateChange.toggle && dateChange.id === id
              && (
              <Input
                type={TYPE.INPUT.DATETIME_LOCAL}
                changeTask={changeTask}
                id={id}
                onBlur={trackDisappearanceFocus}
              />
              )}
              {priorityChange.toggle && priorityChange.id === id && (
              <Priority className={ACTION.CHANGE}>
                {PRIORITY.map(
                  (option) => (
                    <Input {...{
                      type: TYPE.INPUT.RADIO,
                      key: option,
                      changeTask,
                      option,
                      id,
                      onBlur: trackDisappearanceFocus,
                    }}
                    />
                  ),
                )}
              </Priority>
              )}
              <Wrapper extraClass="task" key={id}>
                <Button {...{
                  handlerPriority, id, option: ACTION.CHANGE, priority,
                }}
                >
                  <IconSvg {...{ icon: ICON.LIGHTNING, option: priority }} />
                </Button>
                <span className="task">{text}</span>
                <div className="options">
                  <Button {...{ handlerDate, id, option: ACTION.UPDATE }}>
                    {!date ? <IconSvg icon={ICON.CALENDAR} /> : date}
                  </Button>
                  <Input {...{
                    type: TYPE.INPUT.CHECKBOX,
                    icon: defineIcon(status),
                    changeTask,
                    status,
                    id,
                  }}
                  />
                  <Button {...{ deleteTask, id, option: ACTION.DELETE }}>
                    <IconSvg icon={ICON.CROSS} />
                  </Button>
                </div>
              </Wrapper>
            </div>
          ),
        )}
      </ul>
    </section>
  );
}

export { List };
