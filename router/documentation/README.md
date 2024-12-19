# Documentación sobre las rutas (ROUTER)

## Martes 17/12/2024

Para trabajar bien las **rutas** es interesante tener el **LIVE - SERVER** instalado de manera global en tu proyecto, o **cambias** la ruta en el **terminal** hacía el **documento de origen**, hay que tener especial cuidado en ello.

También, en _settings.json_ puedes **declarar** la carpeta de despliegue del server con el siguiente comando: `"live-server.settings.root":"carpeta origen"`

Ejemplo de rutas de origen:

```HTML
<nav>
    <ul>
        <li><a href="/index.html"> Inicio</a></li>
        <li><a href="/portfolio/portfolio.html">Portfolio</a></li>
        <li><a href="/about/about.html">About</a></li>
    </ul>
</nav>
```

Solo es necesario colocar un **/** adelante del documento o directorio donde se encuentra el documento.

Para que el fichero principal de JS sea _compartido_ entre **todos** los ficheros se debe de crear en el directorio principal, para que lo podamos referenciar de la siguiente manera:

```HTML
<script type="module" src="/main.js"></script>
```

> [!IMPORTANT]
>
> El JS moderno, solo se debe de vincular un archivo JS al documento HTML, por eso en la etiqueta _script_ definimos el archivo principal JS como un tipo **módulo**, ya que este recibirá todas las funciones de los otros archivos JS.

### ENRUTADOR EN JS

La lógica de esto es que se codifique ciertas funciones según la página que utilicemos en distintos momentos, para ello utilizamos un SWITCH.

Pero mucho antes de eso, tenemos que entender algunas cosas:

- Ya que siempre usaremos solo **UN** archivo JS haciendo referencia a las páginas, todos los demás archivos JS los exportaremos dentro de ese archivo, generalmente se llamara **index.js** o **main.js**.

- Existe una propiedad en JS llamada **location** que nos otorga la ubicación donde nos encontramos de manera parseada, es decir, que divide el URL donde nos encontramos en host, pathname, hash, etc.

- **at()** permite contar los elementos de un array con posiciones adelante y hacia atrás, ya que soporta hasta números negativos.

Conociendo todo esto, ahora si podemos construir nuestro enrutador JS:

```JS
console.log("Loaded main...");
const page = location.pathname.split("/").at(-1).split(".").at(0);
switch (page) {
  case "portfolio":
    loadPortfolio();
    break;
  case "about":
    loadAbout();
    break;
}
```

En adición, CSS no cuenta con un sistema de enrutamiento como tal, pero podemos utilizar las **clases** para poder utilizar solo un documento CSS (generalmente llamado _main.css_ y creado en la carpeta de origen) y hacer referencia a las distintas páginas.

```CSS
* {
  box-sizing: border-box;
}

body {
  background-color: bisque;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

/* Aca hacemos referencia a que creamos una clase llamada portfolio que fue inicializada en el body de portfolio.html */
body.portfolio {
  background-color: chocolate;
}

/* Aca hacemos referencia a que creamos una clase llamada about que fue inicializada en el body de about.html */
body.about {
  background-color: red;
}
```

> [!IMPORTANT]
>
> Si sabes que tus configuraciones van a ser más grandes mientras vas avanzando el proyecto, lo mejor sería crear un documento CSS específico para la sub página correspondiente, y lo linkamos en el `<head>` de la siguiente manera, para respetar la cascada:
>
> ```HTML
> <link rel="stylesheet" href="/main.css" />
> <link rel="stylesheet" href="/style_specific.css" />
> ```

### COMPONENTES (Frameworks JS)

Antes de eso debemos de saber lo siguiente:

- Podemos declarar variables con etiquetas HTML dentro, es más, para mayor comodidad a la hora de visualizar estas variables, podemos instalar la extensión **es6-string-html**, de esta manera:

  ```JS
    const template = /*html*/ `
    <header>
      <h1>${pageTittle}</h1>
      <nav>
        <ul>
          <li><a href="/index.html"> Inicio</a></li>
          <li><a href="/portfolio/portfolio.html">Portfolio</a></li>
          <li><a href="/about/about.html">About</a></li>
        </ul>
      </nav>
    </header>
    `;
  ```

- El método `insertAdjacentHTML(position, template)` es el **más potente** a la hora de insertar código HTML en un documento HTML desde JS, esto se suele usar de la siguiente manera:

  ```JS
    document.querySelector(selector).insertAdjacentHTML(position, template);
  ```

Donde la posición es donde se imprime ese código en función del selector seleccionado (que es body por defecto) y el template es el código como tal.

- Interpolación de variables: Esto nos ayuda para poder añadir **dinamismo** a la hora de imprimir los _templates_ para ello podemos crear una variable fuera y la encadenamos dentro de la variable que tenga código HTML

  ```JS
    // header.js
    let finalTitle = "Aprendiendo rutas";
    const template = /*html*/ `
    <header>
      <h1>${finalTitle}</h1>
    </header>
    `;
  ```

Y cambiamos el valor en una función que está dentro del JS referente a la página, en este ejemplo será _portfolio.js_:

```JS
    export function loadPortfolio() {
        console.log("Loaded portfolio!!");
        const pageTittle = "Portfolio";
        createHeader(pageTittle);
    }
```

Esta función se va a **exportar** al _main.js_ y se ejecutará dentro del _switch_, así nos aseguramos que el nombre cambie según la página.

```JS
switch (page) {
    case "portfolio":
      loadPortfolio();
      break;
    case "about":
      loadAbout();
      break;
    case "contacts":
      loadContacts();
      break;
  }
```

#### ¿Qué son los componentes?

Nos referimos a **LOS ELEMENTOS NATURALES** con los que diseñamos una pagina web utilizando JS para **generar** código HTML. Para ello debemos de tener muy en cuenta en que cada elemento debe de tener **AUTONOMÍA**, por ende un _header_ no debe de construir un _menu_ sabiendo que lo podemos crear en un archivo diferente para luego ser inicializado en **_main.js_** con los parámetros correspondientes.
Son un **armazón** de nuestros elementos, para que en vez de editar página por página, solo vamos al archivo JS correspondiente.

Usualmente creamos una carpeta llamada **_components_** donde vamos a guardar todos los archivos que tengan como objetivo crear componentes HTML.

## Miércoles 18/12/2024

### Gestión de datos

Metodología **CRUD** (Create, Read, Update, Delete) a la hora de trabajar con los datos

### Entidades (Modelo)

Esta definición de tareas se realiza a la hora de conseguir los requerimientos del cliente. Esto se potencia más con TypeScript

```TS
type Task = {
  id: string, // UD-
  title: string,
  owner: string,
  isDone: boolean,
}
```

Estos datos suelen llegar en un archivo **_.json_**.

```json
[
  {
    "id": "9fff4359-2f6f-4031-8356-347653ed90c2",
    "title": "string",
    "owner": "string",
    "isDone": true
  }
]
```

> UUID es un label de 128bits que se utilizan a la hora de identificar objetos en sistemas de computación de manera ÚNICA, debido a que soporta una gran cantidad de bits. JS cuenta con una función no estandarizada que nos permite generar números random UUID, se llama **crypto**. Si te da flojera utilizar esta función, en la web existen varias páginas que te ayudarán, como [UUID_Generator](https://www.uuidgenerator.net/)

En sistemas pequeños, nos podemos quedar con solo los primeros 8 caracteres del UUID, para ello podemos utilizar la siguiente sentencia: `crypto.randomUUID().split("-")[0]`.

### Teoría adicional

- Los switch e IF se pueden sustituir de muchas formas, esto es para ahorrar evaluaciones innecesarias

- Operadores cortocircuito:

  ```JS
  true && true // true
  true && false // false
  false && true // false
  false && false // false

  true || true // true
  true || false // true
  false || true // true
  false || false // false

  // sigue si el anterior en nullish (null or undefined)
  // no devuelve un boolean, sino lo que se encuentre
  true ?? true // true
  true ?? false // true
  false ?? true // true
  false ?? false // false
  ```
