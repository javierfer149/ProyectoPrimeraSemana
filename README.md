# Entregable Fase 1 - Desarrollo Frontend con React

En esta primera fase de formación en Alvearium, he construido una aplicación web moderna e interactiva desde cero utilizando React, dividiendo la interfaz en componentes, manejando el estado y publicando el resultado final en internet.

🔗 **URL Pública de la Aplicación:** [https://proyecto-primera-semana.vercel.app/]

---

## 1. Estructura General del Proyecto
El proyecto está construido con Vite y React, y se organiza principalmente en la carpeta `src/`, donde se encuentra todo el código fuente:
* `App.jsx`: Actúa como el enrutador principal utilizando `react-router-dom` para gestionar la navegación entre las distintas vistas.
* **Componentes de Página:** `PaginaContador.jsx` y `PaginaTareas.jsx`, que agrupan la lógica visual de cada sección.
* **Componentes Reutilizables:** `Boton.jsx`, `Formulario.jsx`, `FormularioUsuario.jsx` y `ListaTareas.jsx`, que encapsulan pequeñas partes independientes de la interfaz.

## 2. Diferencia entre Desarrollo y Producción
Durante la creación de este proyecto, he trabajado con dos entornos distintos:
* **Entorno de Desarrollo (`npm run dev`):** Es el entorno que utilizamos en nuestro ordenador local. Incluye herramientas que facilitan la programación, como la recarga rápida para ver los cambios en tiempo real y mensajes de error detallados. No está optimizado para el usuario final.
***Entorno de Producción (`build`):** Es la versión optimizada de la aplicación lista para publicarse. El código se comprime y se prepara para que cargue lo más rápido posible en el navegador del usuario final.

## 3. ¿Cómo publiqué la aplicación?
Para que la aplicación esté disponible en internet, he utilizado un servicio de hosting. El proceso de publicación fue el siguiente:
1. Subí todo el código fuente a un repositorio público en GitHub.
2. Vinculé mi cuenta de GitHub con la plataforma Vercel.
3. Vercel importó el repositorio, detectó automáticamente que era un proyecto creado con Vite, y se encargó de ejecutar el *build* final para generar la URL pública funcional.

---

## 4. ¿Qué componentes tiene este proyecto?
La aplicación se ha dividido en las siguientes partes independientes:
* **FormularioUsuario:** Un componente encargado de recoger el nombre y correo del usuario, manejando sus propios estados y guardando la información en el almacenamiento local del navegador (`localStorage`).
* **Boton:** Un componente reutilizable que renderiza el botón del contador y recibe mediante *props* la función que debe ejecutar al ser pulsado.
* **Formulario:** Contiene un campo de texto y un botón de guardado. Su función es capturar la información que escribe el usuario sobre las tareas para enviarla al componente principal.
* **ListaTareas:** Recibe el array de tareas y se encarga de renderizarlas en pantalla. También incluye la lógica visual para mostrar un botón de "Borrar" junto a cada elemento.

## 5. ¿Qué partes cambian cuando el usuario interactúa?
La interfaz reacciona de forma dinámica a las siguientes interacciones:
1. Al pulsar el botón azul del contador, el número que se muestra debajo se incrementa en uno.
2. Al escribir en los campos de texto, los *inputs* reflejan inmediatamente los caracteres tecleados.
3. Al pulsar el botón "Guardar Perfil", el nombre y correo se almacenan en el navegador y salta una alerta confirmando el guardado.
4. Al pulsar el botón "Guardar" de las tareas, el texto escrito se transforma en una nueva tarea que aparece instantáneamente en la lista inferior, y el *input* se vacía.
5. Si se intenta guardar una tarea que ya existe previamente en la lista, salta un mensaje de confirmación preguntando al usuario si está seguro de querer duplicarla antes de añadirla.
6. Al pulsar el botón rojo de "Borrar" situado junto a una tarea, ese elemento desaparece de la lista visualmente.
7. Al hacer clic en los enlaces del menú superior ("Contador" o "Lista de Tareas"), la pantalla cambia instantáneamente de una vista a otra sin necesidad de recargar la página.

## 6. ¿Qué es el estado en mi aplicación?
El estado es la información que puede cambiar mientras el usuario utiliza la aplicación.Cuando el estado cambia, React actualiza automáticamente la pantalla para reflejar esos cambios[cite: 47].
En esta aplicación en concreto, estoy controlando los siguientes estados:
* **El contador (`count`):** Guarda el número actual de clics.
* **Los datos del usuario (`nombre` y `correo`):** Estados locales dentro del componente `FormularioUsuario` que se inicializan leyendo de `localStorage` y se actualizan conforme el usuario teclea.
***El texto del formulario de tareas (`texto`):** Un estado local dentro del componente `Formulario` que guarda exactamente lo que el usuario está escribiendo para su nueva tarea
* **La lista de tareas (`tareas`):** Guarda un *array* con los textos de las tareas.Al modificar este estado (añadiendo un elemento o filtrando uno para borrarlo), la lista en pantalla se actualiza sola