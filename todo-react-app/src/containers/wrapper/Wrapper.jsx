import './Wrapper.css';

function Wrapper({ extraClass, children }) {
  const className = `${extraClass}-wrapper wrapper`;
  const element = extraClass === 'task' ? <li className={className}>{children}</li> : <div className={className}>{children}</div>;
  return element;
}

export { Wrapper };
