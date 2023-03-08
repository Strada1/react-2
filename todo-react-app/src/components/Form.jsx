import { Priority } from '../containers/priority/Priority';
import { DateTimeInput } from './input/date/DateTimeInput';
import { RadioInput } from './input/radio/RadioInput';
import { IconSvg } from './icon-svg/IconSvg';
import { Wrapper } from '../containers/wrapper/Wrapper';
import { Button } from './button/Button';
import { Input } from './input/Input';
import {
  ACTION, ICON, PRIORITY, CLASS, TITLE,
} from '../core/constants';

function Form({ onSubmit }) {
  return (
    <form className={CLASS.FORM} onSubmit={onSubmit}>
      <fieldset>
        <legend>{TITLE.NEW_TASK}</legend>
        <Wrapper prefix={CLASS.INPUT}>
          <Input />
        </Wrapper>
        <Wrapper prefix={CLASS.INPUT}>
          <DateTimeInput header />
        </Wrapper>
        <Wrapper prefix={CLASS.INPUT}>
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
