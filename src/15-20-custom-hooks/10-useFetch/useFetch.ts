import { useAsync } from '../9-useAsync/useAsync';

const DEFAULT_OPTIONS = {
  headers: { 'Content-Type': 'application/json' },
};

export const useFetch = (
  url: string,
  options = {},
  dependencies: unknown[] = [],
) => {
  return useAsync(() => {
    return fetch(url, { ...DEFAULT_OPTIONS, ...options }).then(res => {
      if (res.ok) return res.json();
      return res.json().then(json => Promise.reject(json));
    });
  }, dependencies);
};
