# Restaurant
Приложения для просмотра меню ресторана.\
Используемая архитектура REST.\
Backend находится в папке "src".
Frontend находится в папке "frontend".
# Содержание 
[Запуск](#start)\
[Технологии](#technologies)

<a name="start"><h2>Запуск</h2></a>
Запуск Бекенда\
Используемая СУБД PostgreSQL.\
Настройки СУДБ находятся в файле src/main/resources/application.properties\
createTable - скрипт для создания таблиц, dataSet - скрипт для создания тестовых сущностей, refreshBD - скрипт для пресоздания таблиц.
Собрать проект в jar файл с помощью maven и запустить приложение на встроенном сервере.\
Запуск Фронтенда\
После запуска сервера в папке frontend/react-typescript/ скачать зависимости для react.\
В файле frontend/react-typescript/src/components/HttpService.tsx поменять переменную "url" на ссылку запущенного ранее сервера.
Запустить react приложение.

<a name="technologies"><h2>Технологии</h2></a>
Backend. Использовались технологии: spring boot 2.7.8, java 11, PostgreSQL, JPA\
Frontend. Использовались технологии: react и TypeScript\