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

En JS, los objetos no pueden mutar, pero si cambiar la información de sus propiedades.
![foo_baz_1](./assets/imag1_11-12-2024.png "Baz = Foo")

Por ello cuando a _baz_ le cambiamos el valor a alguno de sus campos, ocurre esto:
![foo_baz_2](./assets/imag2_11-12-2024.png "Modificamos baz.age")

Ahora, esto es peligroso ya que podemos perder información dentro del código sin quererlo, para ello podemos **CLONAR** el objeto, así:
![clonar_foo_into_baz](./assets/imag3_11-12-2024.png "Clonación de bajo nivel")

> [!LOOK]
> El DOM es un Objeto que apunta a propiedades que tienen otros objetos, así hasta terminar de recorrer el documento.

Actualmente se utiliza el comando `document.querySelector()` que nos sirve a la hora de **\*UBICAR**\_ objetos utilizando los **selectores** que crees en tu proyecto.

IDENTIFICADOR DATA-ID como ATRIBUTO
Esto se selecciona en CSS utilizando
`[data-id="value"] {property: value}`
Y en Java utilizando:
`document.querySelector("[data-id] = 1")`

Si `querySelector()` no encuentra lo que le mandas, te responderá con un **NULL** o con un **UNDEFINED**, sabiendo esto puedes realizar operaciones lógicas

- NORMAS DE USO DE LOS ID

  - El oficial es **data-id**
  - El id es _ÚNICO_, por ende este ejemplo:

    ```HTML
      <header id="header-1" class="main-header">
        <img src="./favicon-2.png" width="50" height="50" alt="Logo" />
        <h1 data-id="1">Saludos</h1>
      </header>
      <main id="header-1" data-id="2"></main>
    ```

    Es \_**ERRÓNEO\***, ya que tiene al id \_header-1\* en 2 posiciones.

  - También, por convenio, los \_id\* tienen que empezar **siempre** con una letra.
