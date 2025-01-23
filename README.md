# Prueba Técnica para Desarrollador Frontend – Mairu

## Objetivo
Crear un componente de tabla dinámica que permita a los usuarios:
1. Especificar el número de filas y columnas.
2. Editar el contenido de las celdas y los títulos de filas y columnas en una fase posterior.

---

## Tecnologías Utilizadas
- **Framework:** React (con soporte para Vite como herramienta de desarrollo)
- **Lenguaje:** TypeScript para garantizar un código más robusto.
- **Estilizado:** Tailwind CSS para un diseño rápido y responsivo.

---

## Estructura del Proyecto
El proyecto sigue la siguiente estructura de carpetas:

```
Mairu-DynamicTable/
|-- src/
|   |-- components/
|   |   |-- DynamicTable.tsx    # Componente principal de la tabla dinámica
|   |   |-- InputsForm.tsx      # Componente para gestionar entradas de filas y columnas
|   |   |-- Table/
|   |   |   |-- DynamicTable/
|   |   |   |   |-- index.tsx    # Componente principal de la tabla dinámica
|   |   |   |   |-- index.module.css  # Estilos específicos para la tabla dinámica
|   |   |   |-- SideBarOptions/
|   |   |   |   |-- index.tsx    # Componente para mostrar la barra lateral
|   |   |   |   |-- index.module.css  # Estilos específicos para la barra lateral
|   |   |   |-- TableActions/
|   |   |   |   |-- index.tsx    # Componente para mostrar botones de acción
|   |   |   |   |-- index.module.css  # Estilos específicos para los botones de acción
|   |   |   |-- TableHeaderCell/
|   |   |   |   |-- index.tsx    # Componente para mostrar la celda de encabezado
|   |   |   |   |-- index.module.css  # Estilos específicos para la celda de encabezado
|   |-- hooks/
|   |   |-- useDynamicTable.ts   # Hook para crear tablas dinámicas 
|   |-- styles/
|   |   |-- index.css           # Estilos globales con Tailwind CSS
|-- public/
|-- README.md                   # Documentación del proyecto
|-- package.json                # Dependencias y scripts
|-- tsconfig.json               # Configuración de TypeScript
|-- vite.config.ts              # Configuración de Vite
```

---

## Requisitos Funcionales

### Fase 1: Creación del Componente de Tabla Dinámica
- **Entradas de usuario:**
  1. Input para el número de filas.
  2. Input para el número de columnas.
- **Botón “Actualizar”:**
  - Permite regenerar la tabla basada en los valores de filas y columnas ingresados.
- **Actualización dinámica:**
  - La tabla se actualiza automáticamente con el nuevo número de filas y columnas.

### Fase 2: Mejora del Componente de Tabla Dinámica
- Cada celda de la tabla debe ser editable.
- Validaciones:
  - Asegúrate de que las entradas sean válidas y sin errores.
  - Maneja casos como celdas vacías o datos inconsistentes.
- Usabilidad:
  - Diseño intuitivo para el usuario al editar contenido en las celdas.

---

## Instrucciones de Instalación y Uso

### 1. Clonar el Repositorio
```bash
git clone https://github.com/ErickSalazar44/Mairu-Table.git
cd Mairu-Table
```

### 2. Instalar Dependencias
Asegúrate de que tienes Node.js instalado en tu máquina.

```bash
npm install
```

### 3. Ejecutar el Proyecto en Modo Desarrollo
Inicia el servidor de desarrollo local:

```bash
npm run dev
```

El proyecto estará disponible en [http://localhost:5173](http://localhost:5173).

---

## Scripts Disponibles

- `npm install`: Instala todas las dependencias necesarias.
- `npm run dev`: Inicia el entorno de desarrollo.
- `npm run build`: Genera una versión optimizada para producción.

---


## Contacto
Si tienes alguna duda o sugerencia sobre el proyecto, por favor contáctame:
- **Correo:** [erickjosepsalazar2@gmail.com](mailto:erickjosepsalazar2@gmail.com)
- **GitHub:** [ErickSalazar44](https://github.com/ErickSalazar44)
- **LinkedIn:** [Erick Salázar](https://www.linkedin.com/in/erick-salazar/)

