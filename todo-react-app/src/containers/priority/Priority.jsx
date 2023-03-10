import { ACTION, CLASS, TITLE } from '../../core/constants';
import './Priority.css';

function Priority({ className, children }) {
  return (
    <div className={`${CLASS.SELECTION} ${className}`}>
      {className === ACTION.ADD && <p className={`${CLASS.SELECTION}-${CLASS.TITLE}`}>{TITLE.PRIORITY}</p>}
      {children}
    </div>
  );
}

export { Priority };
