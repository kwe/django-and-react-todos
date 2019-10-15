# Django rest framework, with React frontend (Using hooks)

Really simple example of a Django 2 app which exposes an api for a React app. 

## To Run:


1. Git clone as normal
2. cd into 'backend' and ...

```
pip install pipenv # if you've not got it installed 
pipenv install
pipenv shell
python manage.py migrate
python manage.py createseuperuser
python manage.py runserver
```

That gives you a backend on http://localhost:8000/admin which you can use to add some content

3. cd into 'frontend'

```
yarn install
yarn start
```

To view some tasks. Nothing dramatic, but it's a good starting point for django_rest framework and React hooks.
