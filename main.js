
const reservas = [];

function hacerReserva() {
  const nombre = prompt("Ingrese su nombre:");
  const numeroDePersonas = prompt("Ingrese el número de personas:");

  if (nombre && numeroDePersonas) {
    const reserva = {
      id: reservas.length + 1,
      nombre: nombre,
      numeroDePersonas: numeroDePersonas
    };

    reservas.push(reserva);
    alert("Reserva realizada con éxito");
    console.log("Nueva reserva:", reserva);
    mostrarReservas();
  } else {
    alert("Debe completar todos los campos para realizar una reserva");
  }
}

function mostrarReservas() {
  console.log("Reservas actuales:");
  for (let i = 0; i < reservas.length; i++) {
    console.log(`Reserva #${reservas[i].id}: ${reservas[i].nombre} para ${reservas[i].numeroDePersonas} personas`);
  }
}


function cancelarReserva() {
  const idReserva = prompt("Ingrese el ID de la reserva a cancelar:");
  let indiceReserva = -1;

  for (let i = 0; i < reservas.length; i++) {
    if (reservas[i].id == idReserva) {
      indiceReserva = i;
      break;
    }
  }

  if (indiceReserva !== -1) {
    const confirmarCancelacion = confirm(`¿Está seguro que desea cancelar la reserva #${idReserva}?`);
    if (confirmarCancelacion) {
      reservas.splice(indiceReserva, 1);
      alert("Reserva cancelada con éxito");
      console.log("Reserva cancelada:", idReserva);
      mostrarReservas();
    }
  } else {
    alert("Reserva no encontrada");
  }
}

