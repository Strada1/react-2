import { useTodoList } from '../../hooks/useTodoList';
import { Form } from '../../components/Form';
import { List } from '../list/List';
import { InputError } from '../../components/input/InputError';
import { CLASS } from '../../core/constants';
import './Main.css';

function Main() {
  const { handleSubmit, control, lists } = useTodoList();

  return (
    <main className={CLASS.MAIN}>
      <Form onSubmit={handleSubmit} />
      {control.error && <InputError message={control.message} />}
      {lists && lists.map(
        (listProps) => (
          <List
            {...listProps}
            className={listProps.list.length !== 0 ? CLASS.SECTION : CLASS.NONE}
          />
        ),
      )}
    </main>
  );
}

export { Main };
