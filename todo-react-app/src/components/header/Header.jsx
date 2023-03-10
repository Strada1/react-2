import { CLASS, TITLE } from '../../core/constants';
import './Header.css';

function Header() {
  return (
    <header>
      <h1 className={CLASS.TITLE}>{TITLE.TODO_LIST}</h1>
    </header>
  );
}

export { Header };
