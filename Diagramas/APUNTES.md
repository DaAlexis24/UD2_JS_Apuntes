# APUNTES UD2 JS en lado Cliente

## Martes 10/12/2024

Etiqueta HTML Menú
Aplica listas dentro de li, se usa para botones y otro tipo de formularios
JS sirve para añadir FUNCIONALIDADES a los elementos HTML
Necesitamos reconocer los elementos que aparecen en la página, porque para JS no existe HTML como tal
Cuando llega el HTML ocurre:

- Parseado (Parse) -> DOM
- Renderización (Creación de un Layout)
- Lo pinta (Lo enseña en pantalla)
  \*\*IMG

Ahora, el parseo en JS es distinto, consiste en 3 elementos: Etiquetas (representadas con cajas), contenido (representadas con círculos) y flechas que las relacionan.
**IMG
IMPORTANTE: En JS los contenidos son ÚNICOS, si no vemos alguno no significa que no existan, solo que no se han inicializado.
** IMG ejemplo 3.
Se pueden ver más ejemplos del parser aquí:

### Document Object Model (DOM)

El document es una HTMLCollection, que tiene definidos sus nodos como CHILDNODES
Es una estructura jerárquica que modela el documento utilizando objetos, enlazando con nodos y todo se encuentra en la etiqueta CHILDREN.
Se usa la siguiente sentencia, para poder visualizarlo:

`console.dir(document.children[n].children[n]...children[n]);`

## Miércoles 11/12/2024

### Más información acerca del Parse en JS

En JS, los objetos no pueden mutar, pero si cambiar la información de sus propiedades.
![foo_baz_1](./assets/imag1_11-12-2024.png "Baz = Foo")

Por ello cuando a _baz_ le cambiamos el valor a alguno de sus campos, ocurre esto:
![foo_baz_2](./assets/imag2_11-12-2024.png "Modificamos baz.age")

Ahora, esto es peligroso ya que podemos perder información dentro del código sin quererlo, para ello podemos **CLONAR** el objeto, así:
![clonar_foo_into_baz](./assets/imag3_11-12-2024.png "Clonación de bajo nivel")

> [!NOTE]
> El DOM es un **Objeto** que apunta a **Propiedades** que tienen otros objetos, así hasta terminar de recorrer el documento.

### Más información acerca de los selectores e ID

- **IDENTIFICADOR DATA-ID como ATRIBUTO en HTML:**
  Se genera así: `<tag html data-id="value">`

  Esto se selecciona en CSS utilizando
  `[data-id="value"] {property: value}`

  Y en Java utilizando:
  `document.querySelector("[data-id] = 1")`

- **Uso de selectores en JS**

  Actualmente se utiliza el comando `document.querySelector()` que nos sirve a la hora de **\*UBICAR**\_ objetos utilizando los **selectores** que crees en tu proyecto.

  Si `querySelector()` no encuentra lo que le mandas, te responderá con un **NULL** o con un **UNDEFINED**, sabiendo esto puedes realizar operaciones lógicas

  También existe el método `querySelectorAll()` que se utiliza a la hora de ubicar clases, elementos HTML varios y atributos, de la siguiente manera:

  ```Javascript
    // Elementos varios
    document.querySelectorAll("p");
    // Clases
    document.querySelectorAll(".basic");
    // Atributos
    document.querySelectorAll('[name = "name value"]');
  ```

  Si `querySelectorAll()` no encuentra lo que le mandas, te responderá con un **NULL** o con un **[void]** si es que le mandas a buscar clases o atributos, sabiendo esto puedes realizar operaciones lógicas.

- **NORMAS DE USO DE LOS ID EN HTML**

  - El oficial es **data-id**
  - El id es _ÚNICO_, por ende este ejemplo:

    ```HTML
      <header id="header-1" class="main-header">
        <img src="./favicon-2.png" width="50" height="50" alt="Logo" />
        <h1 data-id="1">Saludos</h1>
      </header>
      <main id="header-1" data-id="2"></main>
    ```

    Es \*\*ERRÓNEO\*\*\*, ya que tiene al id **header-1** en 2 posiciones.

  - También, por convenio, los **id** tienen que empezar **siempre** con una letra.

### Pareja Clave - Valor en HTML (dl)

Es una estructura similar a las listas donde puedes asignar una cabecera `<dt>` y los elementos que pertenecen ahí `<dd>`.

Para que [la estructura _dl_ en index.html](../web/index.html) pueda recibir datos, utilizaremos una codificación en JS. Para ello vamos a crear el siguiente **array de objetos**:

```JavaScript
const players = [
  { firstName: "", surname: "", alias: "", icon: "" },
  { firstName: "", surname: "", alias: "", icon: "" },
];
```

> [!IMPORTANT]
> Para añadir un valor dentro de una propiedad del objeto utilizo la siguiente sentencia:
>
> `players[1].alias = players[1].firstName;`.
>
> En ese caso, el _alias_ del objeto[1] coge el valor del _firstName_ del objeto[1].

Luego de declarar **_players_** vamos a realizar la sentencia para poder seleccionar las etiquetas HTML que vamos a modificar desde nuestro [index.js](../web/index.js "Index JS"):

`const ddElements = document.querySelectorAll(".tres-raya dd");`

Entendemos que hay varios _ddElements_ dentro del código HTML

-- Para evitar errores, en el **script** de HTML, debes de declararlo como type="module"

## Lunes 16/12/2024

- Hoisting: Este término fue pensado como una manera general de referirse a como funcionan los contextos de ejecución.

¿Cómo se accede a un elemento que ya ha sufrido un action Event? Un AddEventListener siempre recibe un event.target (un trigger en otras palabras) que tenemos que inicializar como una constante tipo button

`const elementButton = event.target`

Y yo, a ese elemento le puedo otorgar una clase según corresponda, utilizando el atributo `.classList.add('nombre de la clase')`.

- FORM DATA: Nos ayuda a la hora de realizar subidas de ficheros y o información.

VALIDACIÓN:

2 funciones para customizar:
setCustomValidity(): Añade una cadena de caracteres con los errores que desees.
reportValidity(): Nos ayuda a detectar errores en la interfaz.

## Jueves 19/12/2024

### Asincronía

Es importante saber que las evaluaciones que se realizan a la hora de ejecutar páginas web, solicitud de consultas, etc, hay tiempos muertos mientras se realizan esas ejecuciones.

JS es un lenguaje monohilo, es por ello que es muy potente a la hora de ejecutar muchas operaciones a la vez, que no consuman recursos del procesador, pero no es bueno a la hora de realizar cálculo.

Un sistema paralelo consiste en tener un hilo para cada instrucción, es decir, si hay 100 instrucciones llegando, sí o sí debe de tener 100 hilos para ser eficiente, es por ello que este sistema no brilla.

JS para solucionar ello utiliza los sistemas asíncronos, que es aprovechar los espacios libres para poder ejecutar otras funciones en cola. Existe las funciones como `setTimeOut` que se encarga de paralizar el tiempo de ejecución por cierto rango de tiempo y nos sirve para visualizar este fenómeno, ya que genera asincronía.
