# reservito

Repositorio mínimo de pruebas para ejemplos y varios

# QUICKSTART

- Clonar el repo
- Entrar al directorio del proyecto
- Construir los contenedores
- Instalar Docker
- Construir los contenedores
- Subir los contenedores
- Acceder a la aplicación en http://localhost:7777

## Instalación de Docker

En Linux:

- Instalar Docker CE: https://docs.docker.com/engine/install/
- Seguir los pasos post-instalacion: https://docs.docker.com/engine/install/linux-postinstall/
- Instalar Docker Compose

En Windows:

Seguir las instrucciones para instalar Docker Desktop: https://docs.docker.com/desktop/windows/install/
El contenedor con npm se demora bastante en windows y no hemos descubierto por qué.

## C

```
docker-compose build
```

- Correr el contenedor:

```
docker-compose up -d
```

- Ver los logs:

```
docker-compose logs -f
```



* Si tienes alguna duda escríbenos
