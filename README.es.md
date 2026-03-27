Español | [English](README.md)

# Pipes-app

[![Angular](https://img.shields.io/badge/-Angular-DD0031?logo=angular&logoColor=white)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind-06B6D4?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![daisyUI](https://img.shields.io/badge/daisyUI-FDE047?logo=daisyui&logoColor=black)](https://daisyui.com/)

Este es un proyecto de **aprendizaje y práctica** creado con Angular para explorar y comprender cómo funcionan los **pipes integrados y personalizados**.
La aplicación muestra diferentes ejemplos de pipes, como **transformaciones de texto, formato de fechas y pipes personalizados**, utilizando componentes de UI reutilizables y datasets tipados.  
El objetivo de este proyecto es practicar conceptos de Angular como:

- Uso de pipes integrados
- Creación de pipes personalizados
- Formateo de datos en plantillas
- Organización de componentes reutilizables
- Uso de datasets tipados en aplicaciones Angular

## Tecnologías

- Angular 21
- TypeScript
- Tailwind CSS
- daisyUI

## Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Antonio-Borrero/Angular-pipes-app.git
   ```

2. Entrar a la carpeta del proyecto:
   ```bash
   cd Angular-pipes-app
   ```
3. Instalar dependencias:
   ```bash
   npm install
   ```
4. Servidor de desarrollo:
   ```bash
   ng serve
   ```
5. Abrir en el navegador:
   - Ir a http://localhost:4200/.
   - La aplicación se recargará automáticamente al modificar cualquier archivo

## Funcionalidades

- Pipes integrados de Angular
  - `uppercase`
  - `lowercase`
  - `titlecase`
  - `date`
  - `number`
  - `currency`
  - `i18nSelect`
  - `i18nPlural`
  - `json`
  - `keyValue`
  - `slice`
- Pipes personalizados
   - `Toggle case pipe`
   - `Otros pipes personalizados`
- Ejemplos en tablas utilizando datasets tipados
- Componente reutilizable de tarjeta (card)
- Navegación con navbar responsiva
- Estilos con TailwindCSS y DaisyUI

## Aprendizajes

- Cómo funcionan los pipes de Angular
- Creación de pipes personalizados
- Formateo de datos en plantillas
- Organización de componentes reutilizables
- Uso de datasets tipados con pipes

## Estructura del proyecto

```bash
- src/
 ├───app
    ├───components             # Componentes de UI reutilizables
    │   ├───card
    │   └───navbar
    ├───data                   # Datasets de ejemplo usados en demostraciones de pipes
    ├───interfaces             # Interfaces y tipos en TypeScript
    ├───pages                  # Páginas de la aplicación
    │   ├───basic-page
    │   ├───custom-page
    │   ├───numbers-page
    │   └───uncommon-page
    ├───pipes                  # Pipes personalizados de Angular
    └───services               # Servicios de la aplicación
```

## Producción
```bash
ng build
```
   
