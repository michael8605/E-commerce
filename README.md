![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Ftechis-fantastic-4%2Fe-commerce&count_bg=%23000000&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)

# TECHShop

This is a project for e-commerce.

`We use Heroku's free plan. The page will take a few moments to load.`

[Open App](https://fantastic4-commerce.herokuapp.com/)

[Open API](https://fantastic4-commerce-api.herokuapp.com/)


## Tech used

- API: `Django`
- Frontend: `React`, `Redux`
- Database: `sqlite3`
- Web Server & Deploy: `Heroku`

## Contributors

| Abdelhak Saadi | Casey Bloom | Michael T Prempeh |


## Folders for main Apps

- `/api` : this is api App created by Django
- `/frontend` : This is frontend App created by React & Redux

## Installation

1. Git Clone

- `git clone git@github.com:techis-fantastic-4/e-commerce.git`

2. Backend

```
cd backend
Python -m venv env
(For Mac) source env/bin/activate
(For Windows) env/Scripts\activate
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
# Open http://127.0.0.1:8000/
```

3. Frontend
```
cd frontend
npm install
npm start
# Open http://127.0.0.1:3000/
```

## Branch Rules

There are three branches :<br>

|---- main -- `Auto Deploy to Production`<br>
|<br>
|<br>
|---- development -- `Auto Deploy to Staging`<br>
|<br>
|<br>
|---- feature branches(Design,Database,User Test etc.) <br>

#### Flow to develop

1. Developer: Create a feature branch.
2. Developer: Merge from `feature` to `develop` to test.
3. Developer: Make a pull request from `feature` to `master` in Github.
4. Tech Lead: Review pull requests and merge them.

#### Branch Naming Scheme

- feature/"trello topic name"

<b>EXAMPLE :</b> feature/base-design-customize

## Coding Style Guide

[Coding Style Guide for Django](https://github.com/Tech-i-s/techis-crm/wiki/Coding-Style-Guide-for-TECH-I.S.-CRM)

![github stats](https://github-readme-stats-one-bice.vercel.app/api/top-langs/?username=ghaiyur-musubi&langs_count=10&layout=compact&role=ORGANIZATION_MEMBER,COLLABORATOR)
