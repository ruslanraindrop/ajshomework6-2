import character from './character';

export default function getSpecial({ special: arr } = character) {
  const copy = arr;
  for (let i = 0; i < copy.length; i += 1) {
    if ('description' in copy[i] === false) {
      copy[i].description = 'Описание недоступно';
    }
  }
  // eslint-disable-next-line no-console
  console.log(copy);
  return copy;
}
