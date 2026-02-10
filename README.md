# Tamashi Web

Este es el sitio web oficial para la aplicación Tamashi, construido con [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com/), y TypeScript.

## Descripción

El propósito de este sitio es servir como una página de aterrizaje (landing page) para la aplicación móvil "Tamashi". Proporciona una bienvenida a los usuarios, un enlace para descargar la aplicación desde la Play Store, y acceso a documentos importantes como el Aviso de Privacidad.

## Despliegue

Este proyecto está configurado para desplegarse automáticamente en **GitHub Pages** cada vez que se realiza un push a la rama `main`.

El flujo de trabajo se encuentra en `.github/workflows/deploy.yml`.

### Configuración de GitHub Pages

Para que el despliegue funcione correctamente, asegúrate de configurar tu repositorio de GitHub de la siguiente manera:

1.  Ve a **Settings** > **Pages**.
2.  En la sección **Build and deployment**, selecciona **Source** como **GitHub Actions**.

## Desarrollo Local

Para ejecutar el proyecto en tu máquina local:

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/tamashi-web.git
    cd tamashi-web
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    ```

3.  **Ejecuta el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## Scripts Disponibles

-   `npm run dev`: Inicia el servidor de desarrollo.
-   `npm run build`: Compila la aplicación para producción. El output se genera en la carpeta `out/` para exportación estática.
-   `npm run start`: Inicia un servidor de producción (no aplicable para exportación estática).
-   `npm run lint`: Ejecuta el linter para revisar el código.
