Критерии приема Используй этот шаблон React-проекта как стартовую точку своего
приложения.

Созданы репозитории goit-react-hw-02-feedback и goit-react-hw-02-phonebook. При
сдаче домашней работы есть две ссылки: на исходные файлы и рабочие страницы
каждого задания на GitHub Pages. При запуске кода задания, в консоли нету ошибок
и предупреждений. Для каждого компонента есть отдельный файл в папке
src/components. Для компонентов описаны propTypes. Все что компонент ожидает в
виде пропсов, передается ему при вызове. JS-код чистый и понятный, используется
Prettier. Стилизация выполнена CSS-модулями или Styled Components.

Книга контактов Напиши приложение хранения контактов телефонной книги.

Шаг 1 Приложение должно состоять из формы и списка контактов. На текущем шаге
реализуй добавление имени контакта и отображение списка контактов. Приложение не
должно сохранять контакты между разными сессиями (обновление страницы).

Используй эту разметку инпута с встроенной валидацией для имени контакта.

<input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>

Состояние хранящееся в родительском компоненте <App> обязательно должно быть
следующего вида, добавлять новые свойства нельзя.

state = { contacts: [], name: '' }

Каждый контакт должен быть объектом со свойствами name и id. Для генерации
идентификаторов используй любой подходящий пакет, например nanoid. После
завершения этого шага, приложение должно выглядеть примерно так.

component preview Шаг 2 Расширь функционал приложения, позволив пользователям
добавлять номера телефонов. Для этого добавь <input type="tel"> в форму, и
свойство для хранения его значения в состоянии.

state = { contacts: [], name: '', number: '' }

Используй эту разметку инпута с встроенной валидацией для номера контакта.

<input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>

После завершения этого шага, приложение должно выглядеть примерно так.

component preview Шаг 3 Добавь поле поиска, которое можно использовать для
фильтрации списка контактов по имени.

Поле поиска это инпут без формы, значение которого записывается в состояние
(контролируемый элемент). Логика фильтрации должна быть нечувствительна к
регистру. state = { contacts: [], filter: '', name: '', number: '' }

component preview Когда мы работаем над новым функционалом, бывает удобно жестко
закодировать некоторые данные в состояние. Это избавит от необходимости вручную
вводить данные в интерфейсе для тестирования работы нового функционала. Например
можно использовать такое начальное состояние.

state = { contacts: [ {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
{id: 'id-2', name: 'Hermione Kline', number: '443-89-12'}, {id: 'id-3', name:
'Eden Clements', number: '645-17-79'}, {id: 'id-4', name: 'Annie Copeland',
number: '227-91-26'}, ], filter: '', name: '', number: '' }

Шаг 4 Если твое приложение реализовано в одном компоненте <App>, выполни
рефакторинг, выделив подходящие части в отдельные компоненты. В состоянии
корневого компонента <App> останутся только свойства contacts и filter.

state = { contacts: [], filter: '' }

Достаточно выделить четыре компонента: форма добавления контактов, список
контактов, элемент списка контактов и фильтр поиска.

После рефакторинга корневой компонент приложения будет выглядеть так.

<div>
  <h1>Phonebook</h1>
  <ContactForm ... />

  <h2>Contacts</h2>
  <Filter ... />
  <ContactList ... />
</div>

Шаг 5 Запрети пользователю возможность добавлять контакты, имена которых уже
есть в телефонной книге. При попытке выполнить такое действие выведи alert с
предупреждением.

component preview Шаг 6 Расширь функционал приложения, позволив пользователю
удалять ранее сохраненные контакты.
