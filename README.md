# Entregable Semana 2 - Fundamentos de React

En esta segunda semana de formación, he ampliado el proyecto base para construir una aplicación interactiva dividiendo la interfaz en componentes y manejando el estado.

## ¿Qué componentes tiene este proyecto?
La aplicación se ha dividido en cuatro partes independientes:
* **App:** Es el componente principal (padre). Contiene al resto de componentes y es el encargado de almacenar y gestionar el estado general (el número del contador y la lista de tareas).
* **Boton:** Un componente reutilizable que renderiza el botón del contador y recibe mediante *props* la función que debe ejecutar al ser pulsado.
* **Formulario:** Contiene un campo de texto y un botón de guardado. Su función es capturar la información que escribe el usuario para enviarla al componente principal.
* **ListaTareas:** Recibe el array de tareas y se encarga de renderizarlas en pantalla. También incluye la lógica visual para mostrar un botón de "Borrar" junto a cada elemento.

## ¿Qué partes cambian cuando el usuario interactúa?
La interfaz reacciona de forma dinámica a las siguientes interacciones:
1. Al pulsar el botón azul del contador, el número que se muestra debajo se incrementa en uno.
2. Al escribir en el campo de texto, el *input* refleja inmediatamente los caracteres tecleados.
3. Al pulsar el botón "Guardar" del formulario, el texto escrito se transforma en una nueva tarea que aparece instantáneamente en la lista inferior, y el *input* se vacía.
4. Al pulsar el botón rojo de "Borrar" situado junto a una tarea, ese elemento desaparece de la lista visualmente.

## ¿Qué es el estado en mi aplicación?
El estado es la información que puede cambiar mientras el usuario utiliza la aplicación. Cuando el estado cambia, React se encarga de actualizar automáticamente la pantalla para reflejar esos cambios.

En esta aplicación en concreto, estoy controlando tres estados distintos.
* **El contador (`count`):** Guarda el número actual de clics.
* **El texto del formulario (`texto`):** Un estado local dentro del componente `Formulario` que guarda exactamente lo que el usuario está escribiendo en el *input* en cada momento.
* **La lista de tareas (`tareas`):** Guarda un *array* con los textos de las tareas. Al modificar este estado (ya sea añadiendo un elemento nuevo o filtrando uno existente para borrarlo), la lista en pantalla se actualiza sola.