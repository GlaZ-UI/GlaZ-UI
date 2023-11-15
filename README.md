# GlaZ UI Documentation

GlaZ UI - это набор компонентов для создания интерфейсов пользователя с помощью React, Typescript и scss. GlaZ UI предоставляет готовые решения для различных элементов дизайна, таких как кнопки, текст, абзацы, таблицы, изображения и другие. GlaZ UI также поддерживает различные темы, анимации и адаптивность.

## Установка и использование

Для установки GlaZ UI в свой проект выполните следующую команду:

```bash
npm install @glaz/ui
```

Для использования компонентов из GlaZ UI в своем коде импортируйте их из пакета.
Затем вы можете использовать компоненты в своем JSX коде, передавая им различные пропсы для настройки их внешнего вида и поведения:

```tsx
	<Button type="primary" size="large" onClick={() => alert('Hello!')}>
	Click me
	</Button>
	<Title>Some Title</Title>
	<Text fontSize="medium" status="success">
	This is some text
	</Text>
	<Paragraph type="code">
	This is a quote paragraph with a red line
	</Paragraph>
```

## Компоненты

В этом разделе описаны все доступные компоненты из UI Kit, их пропсы, примеры использования и стилизации.

### Button

Компонент Button отображает кнопку, которая может быть нажата для выполнения какого-либо действия.

#### Пропсы

| Название  | Тип                                             | Описание                                                                                | По умолчанию |
| --------- | ----------------------------------------------- | --------------------------------------------------------------------------------------- | ------------ |
| type      | 'primary', 'outlined', 'filled', 'text', 'link' | Определяет тип кнопки, который влияет на ее цвет и стиль                                | 'primary'    |
| size      | 'small', 'medium', 'large'                      | Определяет размер кнопки                                                                | 'medium'     |
| disabled  | boolean                                         | Определяет, будет ли кнопка отключена и не реагировать на нажатия                       | false        |
| loading   | boolean                                         | Определяет, будет ли кнопка показывать индикатор загрузки                               | false        |
| shape     | 'smooth','circle'                               | Определяет форму кнопки, которая влияет на ее радиус границы                            | 'smooth'     |
| wave      | 'hover', 'active', 'permanent', 'none'          | Определяет эффект волны, который будет происходить при наведении или нажатии на кнопку  | 'hover'      |
| htmlType  | 'button', 'submit', 'reset'                     | Определяет тип HTML-атрибута кнопки, который влияет на ее поведение внутри формы        | 'button'     |
| href      | string                                          | Определяет URL-адрес, на который будет перенаправлен пользователь при нажатии на кнопку | undefined    |
| onClick   | (event: React.MouseEvent<HTMLElement>) => void  | Определяет функцию, которая будет вызвана при нажатии на кнопку                         | undefined    |
| className | string                                          | Определяет дополнительный класс CSS, который будет применен к кнопке                    | undefined    |
| style     | React.CSSProperties                             | Определяет дополнительные стили CSS, которые будут применены к кнопке                   | undefined    |

#### Примеры использования

```tsx
// Простая кнопка с текстом
<Button>Simple button</Button>

// Кнопка с типом success и размером large
<Button type="success" size="large">Success button</Button>

// Кнопка с индикатором загрузки
<Button loading={true}>Loading button</Button>

// Заблокированная кнопка
<Button disabled={true}>Disabled button</Button>

// Кнопка-ссылка с URL-адресом
<Button href="https://example.com" type="link">Link button</Button>
```

### Typography

Typography включает в себя ряд компонент для работы с текстом.

### Typography/Text

Компонент Text отображает текст с различными стилями и эффектами.

#### Пропсы

| Название    | Тип                                              | Описание                                                                                   | По умолчанию |
| ----------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------ |
| children    | React.ReactNode                                  | Дочерние элементы, которые будут отображаться внутри компонента. Обычно это строка текста. | undefined    |
| fontSize    | 'small', 'medium', 'large'                       | Размер шрифта текста                                                                       | 'medium'     |
| lineThrough | boolean                                          | Определяет, будет ли текст зачеркнутым.                                                    | false        |
| underline   | boolean                                          | Определяет, будет ли текст подчеркнутым.                                                   | false        |
| overLine    | boolean                                          | Определяет, будет ли текст надчеркнутым.                                                   | false        |
| status      | 'default', 'success', 'warning', 'error', 'info' | Определяет цвет текста в зависимости от статуса.                                           | 'default'    |
| fat         | boolean                                          | Определяет, будет ли текст жирным.                                                         | false        |
| className   | string                                           | Определяет дополнительный класс CSS, который будет применен к тексту.                      | undefined    |
| style       | React.CSSProperties                              | Определяет дополнительные стили CSS, которые будут применены к тексту.                     | undefined    |

#### Примеры

```tsx
// Простой текст
<Text>This is some text</Text>

<Text fontSize='large'>This is some large text</Text>

// Текст с эффектами зачеркивания, подчеркивания и надчеркивания
<Text lineThrough={true} underline={true} overLine={true}>
  This is some decorated text
</Text>

// Текст с цветом в зависимости от статуса
<Text status="success">This is some success text</Text>
```

# Продолжение следует...
