# open-journal
Open News Redaction Platform
This platform is actually under developpement.

## Useful commands

- :~/open-journal$ ```sudo docker-compose up -d```
- :~/open-journal$ ```sudo docker-compose up --build```
- :~/open-journal$ ```sudo docker-compose down```
- :~/open-journal/backend$ ```npm run index```
- :~/open-journal/frontend$ ```npm run build```
- :~/open-journal$ ```sudo sudo -i -u postgres```
- :~$ ```psql```

# DATABASE open_journal

PostgreSQL : ```oj_user```:```p49cykAhdqQJSxzm2K358t```

## TABLE users

- ```ID``` SERIAL PRIMARY KEY
- ```username``` VARCHAR(50) UNIQUE NOT NULL
- ```email``` VARCHAR(255) UNIQUE NOT NULL
- ```password``` VARCHAR(255) NOT NULL
- ```created_at``` TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
- ```updated_at``` TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP





