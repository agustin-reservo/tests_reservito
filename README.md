# Reservito

Repositorio mínimo de pruebas para ejemplos y varios.


# QUICKSTART

- Clonar el repo
- Entrar al directorio del proyecto
- Construir los contenedores
- Instalar Docker
- Construir los contenedores
- Subir los contenedores (Ojo que el contenedor de webpack se demora ~30 segundos en subir en windows)
- Acceder a la aplicación en http://localhost:7777

## Instalación de Docker

En Linux:

- Instalar Docker CE: https://docs.docker.com/engine/install/
- Seguir los pasos post-instalacion: https://docs.docker.com/engine/install/linux-postinstall/
- Instalar Docker Compose

En Windows:

Seguir las instrucciones para instalar Docker Desktop: https://docs.docker.com/desktop/windows/install/
El contenedor con npm se demora bastante en windows y no hemos descubierto por qué.

- Construir los contenedores

```
docker-compose build
```

- Correr los contenedores:

```
docker-compose up -d
```


- Para ver los logs (con los contenedores andando):

```
docker-compose logs -f
```


* Si tienes alguna duda escríbenos
