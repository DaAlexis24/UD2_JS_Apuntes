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
console.dir(document.children[n].children[n]...children[n]);
