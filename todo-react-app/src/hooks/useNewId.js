import { useState } from 'react';

const useNewId = () => {
  const [id, setId] = useState(0);

  const incrementId = (list) => {
    setId(list.length === 0 ? 0 : list.at(-1).id + 1);
  };
  return [id, incrementId];
};

export { useNewId };
