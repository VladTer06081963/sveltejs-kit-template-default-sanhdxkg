import { writable } from 'svelte/store';

export const posts = writable([
  { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
  { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
  { id: 3, title: 'Third Post', content: 'This is the content of the third post.' },
  {id:4, title: 'Forth Post', content: 'Это мой четвертый пост'}
]);