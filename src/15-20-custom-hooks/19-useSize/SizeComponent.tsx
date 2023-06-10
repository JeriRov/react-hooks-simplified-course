import { useRef } from 'react';

import { useSize } from './useSize';

export const SizeComponent = () => {
  const ref = useRef<HTMLTextAreaElement>(null);
  const size = useSize(ref);

  return (
    <>
      <div>{JSON.stringify(size)}</div>
      <textarea ref={ref} />
    </>
  );
};
