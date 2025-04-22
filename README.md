1-componente EquipoTalentoLab -> recibe como prop un array de objetos, y cada objeto representa un mienbro del equipo
 -prop -> nombre, rol, img

el componente debe mostrar tarjeta con miembro, nombre, foto y rol


img -> borderRadius:5px
nombre -> fontSize:25px;
descripcion de rol

------------
2.componente TarjetaProyecto = ({titulo, descripcion, botonTexto})

titulo -> nombre de proyecto
descripcion-> detalles de proyecto
botonTexto-> Ver Mas->

interactividad-> boton que diga en consola: explorando:[titulo de proyecto]

------------------
3-recibe array de temas como prop, y muestra boton para cada uno. boton cambia de color fondo al tocarlo

 componente GaleriaIntereses({intereses})

interactividad-> cambia color de backgroundColor al tocar
nombre
---------------
app.jsx ->
importa componentes para construir pagina

muestra la lista del equipo
destacd proyectos
galeria interactiva

Estila pagina para que sea atractiva y organizada. flexbox o grid para diseño de secciones