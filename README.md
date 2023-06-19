# Danone Challenge - Frontend Hackathon Project

![Danone Challenge](/docs/Danone-Productos-Eco.png)
![Danone Challenge](/docs/Danone-Productos-Eco-2.png)
![Danone Challenge](/docs/Danone-Productos-Eco-mobile.png)

## Descripción del proyecto

Este proyecto es parte de la Hackathon - Frontend Danone Challenge, que se llevará a cabo del 17 al 19 de Junio de 2023. El objetivo principal es desarrollar una landing page con un CMS conectado a una API en GraphQL. La página de inicio y la página de productos permitirán previsualizar los productos provenientes del CMS headless, con un diseño responsivo.

## Tecnologías utilizadas

El proyecto se desarrollará utilizando las siguientes tecnologías:

- TypeScript: Un superset de JavaScript que proporciona tipado estático para una mayor seguridad y mejor experiencia de desarrollo.
- Jest: Un framework de pruebas unitarias para JavaScript y TypeScript.
- Testing Library: Una suite de herramientas para realizar pruebas de componentes de manera más accesible y orientada al usuario.
- GitHub Actions: Un servicio de integración continua que automatiza tareas y flujos de trabajo en GitHub.
- Next.js: Un framework de React para la creación de aplicaciones web rápidas y escalables.
- Apollo Client: Una biblioteca de administración de estado y consumo de datos para aplicaciones GraphQL.
- GraphQL: Un lenguaje de consulta y manipulación de datos para APIs.
- CMS - Contentful: Un sistema de gestión de contenido basado en la nube que permite la creación y administración de contenido.
- ESLint: Una herramienta de análisis de código estático para identificar y reportar patrones problemáticos en el código JavaScript y TypeScript.
- Tailwind CSS: Un framework CSS utilitario que permite construir rápidamente interfaces personalizadas.
- Husky: Una herramienta que facilita la configuración de ganchos (hooks) de Git para ejecutar scripts en determinados eventos.

## Configuración

Siga los pasos a continuación para configurar el proyecto en su entorno local:

1. Clonar el repositorio: `git clone https://github.com/ch3ber/danone-hackathon-2023.git`
2. Ingresar al directorio del proyecto: `cd repodanone-hackathon-2023`
3. Instalar las dependencias: `npm install` o `npm i`

## Ejecución del proyecto

Para ejecutar el proyecto en modo de desarrollo, siga los siguientes pasos:

1. Ingresar al directorio del proyecto: `cd repodanone-hackathon-2023`
2. Ejecutar el siguiente comando: `npm run dev`
3. Abra su navegador y acceda a `http://localhost:3000`

## Pruebas

Para ejecutar las pruebas unitarias, siga los siguientes pasos:

1. Ingresar al directorio del proyecto: `cd repodanone-hackathon-2023`
2. Ejecutar el siguiente comando: `npm run test` o `npm run test:watch` para ejecutar las pruebas cada vez que el código cambie

Nota: con `npm run test -- --coverage` se recolecta la cobertura de las pruebas en el código

## CI/CD
El proyecto cuenta con integración y entrega continua (CI/CD) utilizando GitHub Actions. A continuación, se describen los workflows configurados:

### Workflow: Build Next.js Site
Este workflow se ejecuta cuando se realiza un push a la rama "dev" o cuando se ejecuta manualmente desde la pestaña de Actions.

Se encarga de construir el sitio Next.js en una máquina virtual con Ubuntu. Primero, se realiza una clonación del repositorio. Luego, se instalan las dependencias utilizando npm ci. A continuación, se configura la versión de Node.js y se ejecuta el comando npm run build para generar la compilación del proyecto.

### Workflow: Testing
Este workflow se ejecuta cuando se realiza un push a la rama "dev".

Se encarga de ejecutar las pruebas unitarias en una máquina virtual con Ubuntu. Se realiza una clonación del repositorio y se instalan las dependencias utilizando npm ci. Luego, se ejecuta el comando npm run test para ejecutar las pruebas definidas en el proyecto.

## Contribución

Si desea contribuir a este proyecto, siga los siguientes pasos:

1. Fork del repositorio
2. Clonar el repositorio forked: `git clone https://github.com/ch3ber/danone-hackathon-2023.git`
3. Crear una rama para la nueva funcionalidad: `git checkout -b feature/nueva-funcionalidad`
4. Realizar los cambios necesarios y realizar los commits: `git commit -m "Agregar nueva funcionalidad"`
5. Push los cambios a su repositorio forked: `git push origin feature/nueva-funcionalidad`
6. Abrir un pull request en el repositorio original

## Recursos adicionales

- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de Apollo Client](https://www.apollographql.com/docs/react/)
- [Documentación de GraphQL](https://graphql.org/learn/)
- [Documentación de Contentful](https://www.contentful.com/developers/docs/)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [Documentación de Husky](https://typicode.github.io/husky/#/)
- [Documentación de GitHub Actions](https://docs.github.com/en/actions)

## Licencia

Este proyecto está bajo la Licencia MIT. Consulte el archivo `LICENSE` para obtener más información.
