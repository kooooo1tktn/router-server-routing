// src/utils/matchers.ts
export const matchers: {
  [key: string]: (value: string) => boolean | Record<string, unknown>;
} = {
  number: (value: string) => {
    if (!/^\d+$/.test(value)) return false;
    return { parsed: parseInt(value, 10) };
  },
};
