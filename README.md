# Practica-API
api-node-postgres/
├── node_modules/
├── .env
├── index.js             
├── package.json
├── config/
│   └── db.js           
├── models/
│   └── Libro.js        
├── routes/
│   └── libroRoutes.js  
└── controllers/
    └── libroController.js 

La siguiente documentación describe los *endpoints* disponibles para interactuar con el servicio de gestión de Libros, construido con Node.js, Express y PostgreSQL (Sequelize).

### URL Base

La URL base para todas las solicitudes es:
`http://localhost:4000/api`

---

## Endpoints de Gestión de Libros (CRUD)

### 1. Crear un Libro

| Detalle | Especificación |
| :--- | :--- |
| **Método** | `POST` |
| **Ruta** | `/api/libros` |
| **Función** | Agrega un nuevo registro de libro. |
| **Controlador** | `crearLibro` |

**Cuerpo de la Solicitud (JSON)**

| Campo | Tipo | Requerido | Descripción |
| :--- | :--- | :--- | :--- |
| **titulo** | `string` | Sí | Título único del libro. |
| **autor** | `string` | Sí | Nombre completo del autor. |
| **publicacion** | `integer` | No | Año de publicación del libro. |

**Respuestas**

| Código | Estado | Descripción |
| :--- | :--- | :--- |
| **201** | `Created` | Libro creado exitosamente. |
| **500** | `Internal Server Error` | Error al crear el libro (ej. título duplicado). |

---

### 2. Obtener Todos los Libros

| Detalle | Especificación |
| :--- | :--- |
| **Método** | `GET` |
| **Ruta** | `/api/libros` |
| **Función** | Devuelve un listado de todos los libros. |
| **Controlador** | `obtenerLibros` |

**Respuestas**

| Código | Estado | Descripción |
| :--- | :--- | :--- |
| **200** | `OK` | Lista de libros devuelta exitosamente. (Puede ser un *array* vacío: `[]`). |
| **500** | `Internal Server Error` | Error al consultar la base de datos. |

---

### 3. Obtener un Libro por ID

| Detalle | Especificación |
| :--- | :--- |
| **Método** | `GET` |
| **Ruta** | `/api/libros/{id}` |
| **Función** | Devuelve un solo libro por su ID primario. |
| **Controlador** | `obtenerLibro` |

**Parámetros de Ruta**

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| **id** | `integer` | ID único del libro. |

**Respuestas**

| Código | Estado | Descripción |
| :--- | :--- | :--- |
| **200** | `OK` | Libro encontrado. |
| **404** | `Not Found` | Libro no encontrado para el ID proporcionado. |

---

### 4. Actualizar un Libro

| Detalle | Especificación |
| :--- | :--- |
| **Método** | `PUT` |
| **Ruta** | `/api/libros/{id}` |
| **Función** | Modifica uno o más campos de un libro existente. |
| **Controlador** | `actualizarLibro` |

**Parámetros de Ruta**

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| **id** | `integer` | ID único del libro a actualizar. |

**Cuerpo de la Solicitud (JSON)**
El cuerpo puede contener uno o más de los campos definidos para la creación (`titulo`, `autor`, `publicacion`).

**Respuestas**

| Código | Estado | Descripción |
| :--- | :--- | :--- |
| **200** | `OK` | Libro actualizado exitosamente. |
| **404** | `Not Found` | Libro no encontrado para el ID. |
| **500** | `Internal Server Error` | Error al procesar la actualización. |

---

### 5. Eliminar un Libro

| Detalle | Especificación |
| :--- | :--- |
| **Método** | `DELETE` |
| **Ruta** | `/api/libros/{id}` |
| **Función** | Elimina permanentemente un libro de la base de datos. |
| **Controlador** | `eliminarLibro` |

**Parámetros de Ruta**

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| **id** | `integer` | ID único del libro a eliminar. |

**Respuestas**

| Código | Estado | Descripción |
| :--- | :--- | :--- |
| **200** | `OK` | Libro eliminado exitosamente. |
| **404** | `Not Found` | Libro no encontrado para el ID. |
