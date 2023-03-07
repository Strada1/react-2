import { ACTION } from '../../core/constants';
import './Priority.css';

function Priority({ className, children }) {
  return (
    <div className={`selection ${className}`}>
      {className === ACTION.ADD && <p className="selection-title">Priority</p>}
      {children}
    </div>
  );
}

export { Priority };
