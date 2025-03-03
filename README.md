# SvelteKit + Pug Template

Этот проект демонстрирует, как использовать [Pug](https://pugjs.org/) (ранее известный как Jade) в [SvelteKit](https://kit.svelte.dev/). Pug — это шаблонизатор, который позволяет писать более лаконичный и читаемый HTML-код. В этом проекте показано, как интегрировать Pug в SvelteKit и использовать его для создания компонентов и страниц.

---

## 🚀 Быстрый старт

1. **Клонируйте репозиторий**:
   ```bash
   git clone https://github.com/ваш-username/ваш-репозиторий.git
   cd ваш-репозиторий

2. Установите зависимости:
```bash
npm install
```


3. Запустите проект:
```bash
npm run dev
```
4. Откройте в браузере:
Перейдите по адресу http://localhost:5173.

🛠️ Настройка проекта
Установка Pug
Для использования Pug в SvelteKit необходимо установить svelte-preprocess и pug:


```
bash
npm install --save-dev svelte-preprocess pug
```
Конфигурация SvelteKit
Настройте svelte.config.js для поддержки Pug:

```

import adapter from '@sveltejs/adapter-auto';
import { sveltePreprocess } from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
  },
  preprocess: sveltePreprocess({
    pug: true, // Включаем поддержку Pug
  }),
};

export default config;

🎯 Использование Pug
1. Внутри .svelte файлов
Вы можете использовать Pug внутри <template lang="pug">:

svelte
Copy


<script>
  let message = "Hello from Pug!";
</script>

<template lang="pug">
  h1 {message}
  p This is a Pug template inside Svelte.
</template>

<style>
  h1 {
    color: purple;
  }
  p {
    font-size: 1.2em;
  }
</style>
2. Внешние Pug файлы
Вы можете импортировать Pug файлы как строки и вставлять их с помощью {@html}:

svelte
Copy
<script>
  import pugTemplate from './template.pug?raw';
</script>

<template lang="pug">
  div
    {@html pugTemplate}
</template>

<style>
  h1 {
    color: purple;
  }
  p {
    font-size: 1.2em;
  }
</style>
Пример template.pug:

pug
Copy
h1 Welcome to the Pug Page!
p This page is rendered using an external Pug file.
a(href="/") Go back to Home
🧩 Структура проекта
Copy
src/
├── lib/
│   └── Header.svelte       # Пример компонента
├── routes/
│   ├── +layout.svelte      # Основной макет
│   ├── +page.svelte        # Главная страница
│   └── pug/
│       ├── +page.svelte    # Страница с Pug
│       └── template.pug    # Внешний Pug файл
svelte.config.js            # Конфигурация SvelteKit
vite.config.js              # Конфигурация Vite

📦 Зависимости
SvelteKit — фреймворк для создания приложений на Svelte.

Pug — шаблонизатор для написания лаконичного HTML.

svelte-preprocess — препроцессор для Svelte.

📄 Лицензия
Этот проект распространяется под лицензией MIT. Подробности см. в файле LICENSE.

🙏 Благодарности
SvelteKit Documentation

Pug Documentation

svelte-preprocess
