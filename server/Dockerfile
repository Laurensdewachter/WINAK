# Set base image
FROM python:3.10-alpine

# Set working directory
WORKDIR /server

# Install psycopg
RUN apk update && apk add postgresql-dev gcc python3-dev musl-dev

# Install poetry
RUN pip install poetry

# Copy dependencies
COPY pyproject.toml poetry.lock ./

# Install dependencies
RUN poetry install --no-root

# Copy the rest of the files
COPY . .

# Run the server
CMD cd server && poetry run python manage.py migrate && poetry run gunicorn server.asgi:application -k uvicorn.workers.UvicornWorker -w $SERVER_WORKERS
