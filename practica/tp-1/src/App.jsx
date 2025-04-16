
import ListaProductos from './components/ListaProductos'
import Botones from './components/Botones'
import Tarjeta from './components/Tarjeta';

function App() {
  let productos = ["manzana","pera","jamon","tutankamon","otro","el ultimo"];

  return (
    <div>
    
      <ListaProductos productos={productos} />
      <Botones texto="Aceptar" color="green"/>
      <Botones texto="Cancelar" color="red"/>
      <Botones texto="Ver mas" color="blue"/>

      <Tarjeta titulo="gola" descripcion="gosfnl" botonColor="green" botonTexto="aceptar"/>

      <hr />

    </div>
    
  )
}

export default App
