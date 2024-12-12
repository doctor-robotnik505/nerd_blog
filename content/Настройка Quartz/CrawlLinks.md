Этот плагин анализирует ссылки и обрабатывает их, чтобы указать на нужные места. Это также необходимо для встроенных ссылок (например, изображений).
> [!note] Дополнительно
> Посетите информацию о [[Конфигурация Quartz|конфигурации]], если хотите узнать, как добавить, удалить или изменить конфиги ваших плагинов

This plugin accepts the following configuration options:

- `markdownLinkResolution`: Sets the strategy for resolving Markdown paths, can be `"absolute"` (default), `"relative"` or `"shortest"`. You should use the same setting here as in [[Obsidian compatibility|Obsidian]].
  - `absolute`: Path relative to the root of the content folder.
  - `relative`: Path relative to the file you are linking from.
  - `shortest`: Name of the file. If this isn't enough to identify the file, use the full absolute path.
- `prettyLinks`: If `true` (default), simplifies links by removing folder paths, making them more user friendly (e.g. `folder/deeply/nested/note` becomes `note`).
- `openLinksInNewTab`: If `true`, configures external links to open in a new tab. Defaults to `false`.
- `lazyLoad`: If `true`, adds lazy loading to resource elements (`img`, `video`, etc.) to improve page load performance. Defaults to `false`.
- `externalLinkIcon`: Adds an icon next to external links when `true` (default) to visually distinguishing them from internal links.

> [!warning]
> Removing this plugin is _not_ recommended and will likely break the page.

## API

- Category: Transformer
- Function name: `Plugin.CrawlLinks()`.
- Source: [`quartz/plugins/transformers/links.ts`](https://github.com/jackyzha0/quartz/blob/v4/quartz/plugins/transformers/links.ts).
