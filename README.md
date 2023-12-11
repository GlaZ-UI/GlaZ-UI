# GlaZ UI Documentation

GlaZ UI - это набор компонентов для создания интерфейсов пользователя с помощью React, Typescript и scss. GlaZ UI предоставляет готовые решения для различных элементов дизайна, таких как кнопки, текст, абзацы, таблицы, изображения и другие. GlaZ UI также поддерживает различные темы, анимации и адаптивность.

## Установка и использование

Для установки GlaZ UI в свой проект выполните следующую команду:

```bash
npm install @glaz/ui
```

Для использования компонентов из GlaZ UI в своем коде импортируйте их из пакета.
Затем вы можете использовать компоненты в своем JSX коде, передавая им различные пропсы для настройки их внешнего вида и поведения

## Компоненты

В этом разделе описаны все доступные компоненты из UI Kit, их пропсы, примеры использования и стилизации.

### **Button**

Компонент Button отображает кнопку, которая может быть нажата для выполнения какого-либо действия.

#### _Пропсы_

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

#### _Примеры использования_

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

### **Typography**

Typography включает в себя ряд компонент для работы с текстом.

### **Typography/Text**

Компонент Text отображает текст с различными стилями и эффектами.

#### _Пропсы_

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

#### _Примеры использования_

```tsx
// Простой текст
<Text>This is some text</Text>

// Большой текст
<Text fontSize='large'>This is some large text</Text>

// Текст с эффектами зачеркивания, подчеркивания и надчеркивания
<Text lineThrough={true} underline={true} overLine={true}>
  This is some decorated text
</Text>

// Текст с цветом в зависимости от статуса
<Text status="success">This is some success text</Text>
```

### **Typography/Title**

Компонент Text отображает текст с различными стилями и эффектами.

#### _Пропсы_

| Название    | Тип                                              | Описание                                                                                   | По умолчанию |
| ----------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------ |
| children    | React.ReactNode                                  | Дочерние элементы, которые будут отображаться внутри компонента. Обычно это строка текста. | undefined    |
| level       | 1, 2, 3, 4, 5, 6                                 | Уровень заголовка                                                                          | 1            |
| lineThrough | boolean                                          | Определяет, будет ли текст зачеркнутым.                                                    | false        |
| underline   | boolean                                          | Определяет, будет ли текст подчеркнутым.                                                   | false        |
| overLine    | boolean                                          | Определяет, будет ли текст надчеркнутым.                                                   | false        |
| status      | 'default', 'success', 'warning', 'error', 'info' | Определяет цвет текста в зависимости от статуса.                                           | 'default'    |
| className   | string                                           | Определяет дополнительный класс CSS, который будет применен к тексту.                      | undefined    |
| style       | React.CSSProperties                              | Определяет дополнительные стили CSS, которые будут применены к тексту.                     | undefined    |

#### _Примеры использования_

```tsx
// Заголовок первого уровня
<Title level={1}>This is some level 1 title</Title>

// Заголовок первого уровня со статусом "Успешно"
<Title level={1} status="success">This is some success title</Title>

// Зачеркнутый заголовок
<Title level={1} lineThrough>This is some title with line through</Title>

// Заголовок второго уровня
<Title level={2}>This is some level 2 title</Title>

// Заголовок третьего уровня
<Title level={3}>This is some level 3 title</Title>
```

### **Typography/Paragraph**

Компонент Text отображает текст с различными стилями и эффектами.

#### _Пропсы_

| Название  | Тип                        | Описание                                                                                   | По умолчанию |
| --------- | -------------------------- | ------------------------------------------------------------------------------------------ | ------------ |
| children  | React.ReactNode            | Дочерние элементы, которые будут отображаться внутри компонента. Обычно это строка текста. | undefined    |
| fontSize  | 'small', 'medium', 'large' | Размер шрифта текста                                                                       | 'medium'     |
| type      | 'default', 'code'          | Тип параграфа                                                                              | 'default'    |
| className | string                     | Определяет дополнительный класс CSS, который будет применен к тексту.                      | undefined    |
| style     | React.CSSProperties        | Определяет дополнительные стили CSS, которые будут применены к тексту.                     | undefined    |

#### _Примеры использования_

```tsx
// Простой параграф
<Paragraph type="default">
	Lorem ipsum dolor sit amet, consectetur adipiscing elit.
	Nunc ultricies vulputate tellus, vitae vulputate metus
	sollicitudin vitae. Sed interdum eros eu turpis consectetur
	bibendum. Nam sed tincidunt leo. Etiam interdum nunc et
	velit vehicula ullamcorper. Orci varius natoque penatibus et
	magnis dis parturient montes, nascetur ridiculus mus.
	Phasellus non erat a nisi cursus placerat id et nulla. Ut
	gravida porta consectetur.
</Paragraph>

// Параграф с оформлением кода
<Paragraph type="code">
	Lorem ipsum dolor sit amet, consectetur adipiscing elit.
	Nunc ultricies vulputate tellus, vitae vulputate metus
	sollicitudin vitae. Sed interdum eros eu turpis consectetur
	bibendum. Nam sed tincidunt leo. Etiam interdum nunc et
	velit vehicula ullamcorper. Orci varius natoque penatibus et
	magnis dis parturient montes, nascetur ridiculus mus.
	Phasellus non erat a nisi cursus placerat id et nulla. Ut
	gravida porta consectetur.
</Paragraph>

// Использование параграфа совместно с Text
<Paragraph>
	Lorem ipsum dolor sit <Text status="info">amet</Text>,
	consectetur adipiscing elit. Nunc ultricies vulputate
	tellus, vitae vulputate metus sollicitudin vitae. Sed
	interdum eros eu turpis consectetur bibendum.{' '}
	<Text underline>Nam sed tincidunt</Text> leo. Etiam interdum
	nunc et velit vehicula ullamcorper. Orci varius natoque
	penatibus et magnis dis parturient montes, nascetur
	ridiculus mus. Phasellus non erat a nisi cursus placerat id
	et nulla. Ut gravida porta consectetur.
</Paragraph>
```

### **Tabs**

Компонент Tabs отображает вкладки, позволяющий переключаться между компонентами/их содержимым.

#### _Пропсы_

| Название     | Тип                                                                                                                 | Описание                                                              | По умолчанию |
| ------------ | ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | ------------ |
| tabs         | {component: React.ReactNode; title: React.ReactNode, string; key: string; disabled?: boolean; loading?: boolean;}[] | Массив компонентов для отображения, а также их настроек.              | []           |
| defaultValue | number                                                                                                              | Индекс компонента в массиве, который будет показываться по умолчанию. | 0            |

#### _Примеры использования_

```tsx
// Простой параграф
<Paragraph type="default">
	Lorem ipsum dolor sit amet, consectetur adipiscing elit.
	Nunc ultricies vulputate tellus, vitae vulputate metus
	sollicitudin vitae. Sed interdum eros eu turpis consectetur
	bibendum. Nam sed tincidunt leo. Etiam interdum nunc et
	velit vehicula ullamcorper. Orci varius natoque penatibus et
	magnis dis parturient montes, nascetur ridiculus mus.
	Phasellus non erat a nisi cursus placerat id et nulla. Ut
	gravida porta consectetur.
</Paragraph>

// Параграф с оформлением кода
<Paragraph type="code">
	Lorem ipsum dolor sit amet, consectetur adipiscing elit.
	Nunc ultricies vulputate tellus, vitae vulputate metus
	sollicitudin vitae. Sed interdum eros eu turpis consectetur
	bibendum. Nam sed tincidunt leo. Etiam interdum nunc et
	velit vehicula ullamcorper. Orci varius natoque penatibus et
	magnis dis parturient montes, nascetur ridiculus mus.
	Phasellus non erat a nisi cursus placerat id et nulla. Ut
	gravida porta consectetur.
</Paragraph>

// Использование параграфа совместно с Text
<Paragraph>
	Lorem ipsum dolor sit <Text status="info">amet</Text>,
	consectetur adipiscing elit. Nunc ultricies vulputate
	tellus, vitae vulputate metus sollicitudin vitae. Sed
	interdum eros eu turpis consectetur bibendum.{' '}
	<Text underline>Nam sed tincidunt</Text> leo. Etiam interdum
	nunc et velit vehicula ullamcorper. Orci varius natoque
	penatibus et magnis dis parturient montes, nascetur
	ridiculus mus. Phasellus non erat a nisi cursus placerat id
	et nulla. Ut gravida porta consectetur.
</Paragraph>
```

# Продолжение следует...

# Задачи разработки:

## Input

1. Реализовать возможность корректировки формата ввода за счет передачи регулярного выражения;
2. Доделать функцию required, чтобы, после однократного тыка по полю ввода, в случае, если поле заполнено некорректно, подсвечивалось варнингом.
3. А также реализовать:

    #### Input.radio

    #### Input.checkBox

    #### Input.colorPicker

    #### Input.datePicker

    #### Input.timePicker

    #### Input.dateTimePicker
