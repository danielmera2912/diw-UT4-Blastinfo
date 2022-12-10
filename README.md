# Blastinfo
Explicación de los estilos de CSS directos:

El CSS interno añade fragmento de CSS dentro del HTML, cubierto con "<style type="text/css">" y dentro tratandolo como css normal. La ventaja principal es que no necesitas crear más de un archivo para añadir CSS y la desventaja es que puede aumentar el tamaño de la página y el tiempo de carga.

Mientras que el CSS externo, se enlaza a un archivo css externo, mediante:
"<link rel="stylesheet" type="text/css" href="style.css" />"

Las ventajas de esto es que el css está en un documento separado, por lo que los archivos HTML tendrán una estructura más limpia y un tamaño menor, además de utilizar un mismo archivo css para varias páginas, mientras que las descentajas podrían ser que no se muestre correctamente el CSS hasta que no se cargue y que al enlazar varios archivos de CSS puede aumentar el tiempo de carga.

En definitiva, la mejor opción es el CSS externo, ya que sus ventajas son mucho más relevantes que sus desventajas.