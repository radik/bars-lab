ExtJs 4 + Django
================

Зависимости:
* python >= 2.7
* pip

Для запуска:

* Перейдите в папку проекта
```bash
cd extjs-django/marvel
```

* Установите зависимости запустив команду
```bash
pip install -U -r dependencies.txt 
```

* Синхронизируйте базу данных:
```bash
python manage.py syncdb
```

* Запустите сервер:
```bash
python manage.py runserver
```

Приложение библиотека будет доступна по адресу http://localhost:8000