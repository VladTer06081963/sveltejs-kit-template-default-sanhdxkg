import pug from 'pug';
import fs from 'fs/promises';

// Загружаем Pug-шаблон и рендерим его на сервере
export async function GET({ url }) {
  try {
    const template = await fs.readFile('src/test.pug', 'utf-8');
    const html = pug.render(template, { title: "Заголовок с сервера" });

    return new Response(html, {
      headers: { "Content-Type": "text/html" },
    });
  } catch (error) {
    return new Response(`Ошибка Pug: ${error.message}`, { status: 500 });
  }
}
