import { Priority } from '../containers/priority/Priority';
import { DateTimeInput } from './input/date/DateTimeInput';
import { RadioInput } from './input/radio/RadioInput';
import { IconSvg } from './icon-svg/IconSvg';
import { Wrapper } from '../containers/wrapper/Wrapper';
import { Button } from './button/Button';
import { Input } from './input/Input';
import {
  ACTION, ICON, PRIORITY, PREFIX, TITLE,
} from '../core/constants';

function Form({ onSubmit }) {
  return (
    <form className={PREFIX.FORM} onSubmit={onSubmit}>
      <fieldset>
        <legend>{TITLE.NEW_TASK}</legend>
        <Wrapper prefix={PREFIX.INPUT}>
          <Input />
        </Wrapper>
        <Wrapper prefix={PREFIX.INPUT}>
          <DateTimeInput header />
        </Wrapper>
        <Wrapper prefix={PREFIX.INPUT}>
          <Priority className={ACTION.ADD}>
            {PRIORITY.map((option) => <RadioInput {...{ header: true, option, key: option }} />)}
          </Priority>
          <Button option={ACTION.ADD}>
            <IconSvg icon={ICON.PLUS} />
          </Button>
        </Wrapper>
      </fieldset>
    </form>
  );
}

export { Form };
