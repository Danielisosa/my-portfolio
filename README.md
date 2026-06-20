# 🪐 Danieli.dev — Professional Frontend Portfolio

Este repositorio contiene el código fuente de mi portafolio web profesional. Está diseñado y desarrollado bajo una arquitectura moderna, modular y limpia, utilizando el ecosistema más reciente de Angular 21 junto con técnicas avanzadas de reactividad y rendimiento del lado del servidor.

## Demo en Vivo: 
Ingresa aquí al portafolio en producción


## 🛠️ Stack Tecnológico

Framework: Angular 21 (Componentes Standalone)

Gestión de Estado: Angular Signals (Reactividad fina y predecible)

Renderizado: SSR (Server-Side Rendering) e Hidratación para optimización de SEO y velocidad de carga (FCP)

Estilos: Tailwind CSS v4 (Efectos Synthwave, Glassmorphism y diseño responsivo)

Herramientas de Construcción: Vite / Esbuild nativos de Angular 21

## 📐 Decisiones de Arquitectura y Buenas Prácticas

Modularidad Limpia: Estructuración de carpetas basada en dominios de negocio e infraestructura (core, shared, layout, features), evitando el acoplamiento y facilitando la mantenibilidad.

Control Flow Nativo: Implementación del nuevo flujo de control de Angular (@if / @else) para optimizar el rendimiento de renderizado en el cliente.

Inyección de Dependencias Moderna: Uso prioritario de la función inject() sobre la inyección tradicional por constructor, reduciendo el acoplamiento de clases y mejorando el testing.

SOLID & Clean Code: Clases enfocadas en la responsabilidad única (Single Responsibility), modularidad en componentes compartidos y código auto-explicativo libre de deuda técnica.

## 💻 Proyectos Destacados Presentados

1. DashStore (Dashboard de Inventario Reactivo)

Descripción: Panel de administración para e-commerce enfocado en el manejo de prendas.

Ingeniería: Operaciones CRUD completas (creación, edición, visualización) integradas con APIs RESTful, estructuradas de forma síncrona y reactiva utilizando Signals para la gestión de estados.

2. PokéAPI Pro (Explorador Avanzado de Pokémon)

Descripción: Aplicación de consumo de datos masivos optimizada para rendimiento extremo.

Ingeniería: Configurada bajo Server-Side Rendering (SSR) para asegurar un indexado de SEO perfecto. Cuenta con una cobertura de pruebas unitarias robustas utilizando herramientas de última generación.

## ⚡ Guía de Instalación y Ejecución Local

Si deseas clonar este proyecto y ejecutarlo en tu entorno local, asegúrate de tener instalado Node.js (versión 20 o superior).

Clonar el repositorio:

```bash
git clone [https://github.com/Danielisosa/my-portfolio.git](https://github.com/Danielisosa/my-portfolio.git)
cd my-portfolio
```

Instalar dependencias:
```bash
npm install
```

Iniciar el servidor de desarrollo en caliente (Hot Reload):

```bash
npm run start
```

Iniciar con Server-Side Rendering (SSR) activo en entorno local:

```bash
npm run dev:ssr
```


Compilar para producción (SSR optimizado):

```bash
npm run build
```

## ✉️ Contacto e Información Profesional

Ubicación: Cabudare, Lara, Venezuela (Disponible para presencial en Lara y trabajo remoto)

LinkedIn: linkedin.com/in/danieli-sosa-a8781114a

Email: danielisosa.0512@gmail.com

