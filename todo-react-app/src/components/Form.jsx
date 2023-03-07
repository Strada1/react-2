import { Priority } from '../containers/priority/Priority';
import { Wrapper } from '../containers/wrapper/Wrapper';
import { IconSvg } from './icon-svg/IconSvg';
import { Button } from './button/Button';
import { Input } from './input/Input';
import {
  ACTION, ICON, TYPE, PRIORITY, TAG,
} from '../core/constants';

function Form({ onSubmit }) {
  return (
    <form className="form" onSubmit={onSubmit}>
      <fieldset>
        <legend>New Task</legend>
        <Wrapper prefix={TAG.INPUT}>
          <Input type={TYPE.INPUT.TEXT} />
        </Wrapper>
        <Wrapper prefix={TAG.INPUT}>
          <Input header type={TYPE.INPUT.DATETIME_LOCAL} />
        </Wrapper>
        <Wrapper prefix={TAG.INPUT}>
          <Priority className={ACTION.ADD}>
            {PRIORITY.map(
              (option) => (
                <Input
                  {...{
                    header: true, type: TYPE.INPUT.RADIO, option, key: option,
                  }}
                />
              ),
            )}
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
