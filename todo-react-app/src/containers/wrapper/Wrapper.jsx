import { PREFIX } from '../../core/constants';
import './Wrapper.css';

function Wrapper({ prefix, children }) {
  return <div className={`${prefix}-${PREFIX.WRAPPER} ${PREFIX.WRAPPER}`}>{children}</div>;
}

export { Wrapper };
