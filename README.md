# Blastinfo
Explicación de los estilos de CSS directos:

El CSS interno añade fragmento de CSS dentro del HTML, cubierto con "<style type="text/css">" y dentro tratandolo como css normal. La ventaja principal es que no necesitas crear más de un archivo para añadir CSS y la desventaja es que puede aumentar el tamaño de la página y el tiempo de carga.

Mientras que el CSS externo, se enlaza a un archivo css externo, mediante:
"<link rel="stylesheet" type="text/css" href="style.css" />"

Las ventajas de esto es que el css está en un documento separado, por lo que los archivos HTML tendrán una estructura más limpia y un tamaño menor, además de utilizar un mismo archivo css para varias páginas, mientras que las descentajas podrían ser que no se muestre correctamente el CSS hasta que no se cargue y que al enlazar varios archivos de CSS puede aumentar el tiempo de carga.


El CSS inline, consiste en dar estilo a un elemento HTML específico, se realizará de la siguiente forma:
"<h1 class="cuerpo__titulo" style="color:#0E6DCF;"></h1>"
Esto no es recomendable, ya que cada etiqueta HTML debe de ser estilizada individualmente, y la gestión de estilos será complicada de gestionar. Sus ventajas es que se inserta fácil y rápido, es útil para realizar pruebas y no es necesario cargar un fichero CSS externo, y las desventajas es que desordena la estructura HTML y puede afectar al tamaño de la página y al tiempo de carga.

En definitiva, la mejor opción es el CSS externo, ya que sus ventajas son mucho más relevantes que sus desventajas.


Explicación de hojas de estilos alternativas, se implementan en el HTML de esta forma:
<link rel="stylesheet" href="estilo-1.css" title="Estilo 1">
<link rel="stylesheet" href="estilo-2.css" title="Estilo 2">
<link rel="stylesheet" href="estilo-3.css" title="Estilo 3">

Y ya el usuario podrá elegir el estilo que querrá utilizar.