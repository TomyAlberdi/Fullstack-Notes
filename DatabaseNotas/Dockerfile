FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=my-secret-pw

COPY my-database.sql /docker-entrypoint-initdb.d/

EXPOSE 3306