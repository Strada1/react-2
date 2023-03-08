import { ACTION, PREFIX, TITLE } from '../../core/constants';
import './Priority.css';

function Priority({ className, children }) {
  return (
    <div className={`${PREFIX.SELECTION} ${className}`}>
      {className === ACTION.ADD && <p className={`${PREFIX.SELECTION}-${PREFIX.TITLE}`}>{TITLE.PRIORITY}</p>}
      {children}
    </div>
  );
}

export { Priority };
