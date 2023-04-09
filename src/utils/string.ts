export const camelToSnake = (text: string): string =>
  text
    .split(/(?=[A-Z])/)
    .join('_')
    .toLowerCase()
