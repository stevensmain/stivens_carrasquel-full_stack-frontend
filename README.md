# YouMusic

YouMusic es una aplicación construida con Next.js que permite a los usuarios buscar artistas, explorar sus álbumes y guardar sus álbumes favoritos.

## Tecnologías Utilizadas

- **Next.js** - Framework de React para renderizado del lado del servidor y generación de sitios estáticos.
- **Auth.js** - Para la autenticación con Spotify.
- **Tailwind CSS** - Para estilización de la interfaz de usuario.
- **Zustand** - Para la gestión del estado de la aplicación.
- **Spotify API** - Para obtener información de artistas y álbumes.

## Funcionalidades

- Autenticación con cuenta de Spotify.
- Búsqueda de artistas por nombre.
- Visualización de los álbumes de cada artista.
- Guardado de álbumes en una lista de favoritos.

## Instalación y Configuración

### Prerrequisitos

Asegúrate de tener instalado:

- Node.js (versión recomendada: 18+)
- npm, yarn o pnpm (recomendado: pnpm)

### Pasos de instalación

1. Clonar el repositorio:

   ```sh
   git clone https://github.com/stevensmain/stivens_carrasquel-full_stack-frontend.git
   cd stivens_carrasquel-full_stack-frontend
   ```

2. Instalar dependencias:

   ```sh
   pnpm install
   ```

3. Configurar las variables de entorno:
   Renombra el archivo `.env.template` y modifica el siguiente contenido:

   ```env
   AUTH_SECRET=tu_secreto
   AUTH_SPOTIFY_ID=tu_client_id
   AUTH_SPOTIFY_SECRET=tu_client_secret
   ```

4. Ejecutar el servidor de desarrollo:
   ```sh
   pnpm dev
   ```

## Uso

1. Inicia sesión con tu cuenta de Spotify.
2. Busca artistas en la barra de búsqueda.
3. Explora los álbumes del artista seleccionado.
4. Guarda los álbumes que te gusten en tu lista de favoritos.

## Licencia

Este proyecto está bajo la licencia MIT.

---

Desarrollado con ❤️ usando Next.js y la API de Spotify.
