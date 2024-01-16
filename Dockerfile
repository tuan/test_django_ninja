ARG PYTHON_VERSION=3.12-slim-bullseye
ARG NODE_VERSION=21-alpine

FROM node:${NODE_VERSION}

RUN npm install -g pnpm

WORKDIR /src
COPY ./jsclient .

RUN pnpm install && pnpm build

################################################################################
FROM python:${PYTHON_VERSION}

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Needed to install some python packages later
RUN apt-get update
RUN apt-get -y install gcc

RUN mkdir -p /code
WORKDIR /code

# Makes logs volume
RUN mkdir logs
RUN touch logs/debug.log
VOLUME /code/logs

RUN pip install pipenv
COPY Pipfile Pipfile.lock /code/
RUN pipenv install --deploy --system

COPY . /code
RUN rm -rf jsclient && mkdir -p /code/jsclient/dist

# copy dist from node
COPY --from=0 /src/dist /code/jsclient/dist

RUN python manage.py collectstatic --noinput

EXPOSE 8000

CMD ["gunicorn", "--bind", "0.0.0.0:8000", "--workers", "2", "project.wsgi"]