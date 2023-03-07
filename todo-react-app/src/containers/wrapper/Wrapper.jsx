import { PREFIX } from '../../core/constants';
import './Wrapper.css';

function Wrapper({ prefix, children }) {
  const className = `${prefix}-wrapper wrapper`;
  const element = prefix === PREFIX.TASK
    ? <li className={className}>{children}</li>
    : <div className={className}>{children}</div>;
  return element;
}

export { Wrapper };
