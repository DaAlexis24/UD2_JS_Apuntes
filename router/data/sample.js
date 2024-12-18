console.log(crypto.randomUUID().split("-")[0]);

s = () => undefined;
z = () => 33;

if (s() ?? z()) {
  console.log("Hola");
}
// La puerta de paso (&&) la podemos utilizar siempre y cuando queramos ejecutar funciones
// En ?? solo pasas si eres NO NULO
