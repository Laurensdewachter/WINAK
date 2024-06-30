# Set base image
FROM python:3.10-alpine

# Set working directory
WORKDIR server

# Install poetry
RUN pip install poetry

# Copy dependencies
COPY pyproject.toml poetry.lock ./

# Install dependencies
RUN poetry install --no-root

# Copy the rest of the files
COPY . .

# Set environment variables (only during build time)
ARG SERVER_WORKERS

# Run the server
CMD cd server && poetry run gunicorn server.asgi:application -k uvicorn.workers.UvicornWorker -w $SERVER_WORKERS
