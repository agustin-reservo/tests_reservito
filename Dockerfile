FROM python:3
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Workaround so you we don't have to sudo everything outside the container
ARG UID=1000
ARG GID=1000
RUN groupadd -g ${GID} django
RUN useradd -ms /bin/bash django --uid ${UID} -g ${GID}

WORKDIR /code
COPY requirements.txt /code/
RUN pip install -r requirements.txt
COPY requirements-dev.txt /code/
RUN pip install -r requirements-dev.txt
COPY . /code/
