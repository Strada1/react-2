import { CLASS } from '../../core/constants';
import './Wrapper.css';

function Wrapper({ prefix, children }) {
  return <div className={`${prefix}-${CLASS.WRAPPER} ${CLASS.WRAPPER}`}>{children}</div>;
}

export { Wrapper };
