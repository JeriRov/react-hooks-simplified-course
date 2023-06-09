import { RefObject } from 'react';

import { useEventListener } from '../13-useEventListener/useEventListener';

type Handler = (event: MouseEvent) => void;

export const useClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler,
  mouseEvent: 'mousedown' | 'mouseup' = 'mousedown',
): void => {
  useEventListener<MouseEvent>(mouseEvent, event => {
    const el = ref?.current;

    if (!el || el.contains(event.target as Node)) {
      return;
    }

    handler(event);
  });
};
