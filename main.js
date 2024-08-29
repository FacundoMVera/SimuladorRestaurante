document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('reservation-form');
    const reservationsList = document.getElementById('reservations-list');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const people = document.getElementById('people').value;
        const date = document.getElementById('date').value;
        
        if (name && people && date) {
            const reservation = { name, people, date };
            saveReservation(reservation);
            displayReservations();
            form.reset();
        }
    });

    function saveReservation(reservation) {
        let reservations = JSON.parse(localStorage.getItem('reservations')) || [];
        reservations.push(reservation);
        localStorage.setItem('reservations', JSON.stringify(reservations));
    }

    function displayReservations() {
        reservationsList.innerHTML = '';
        let reservations = JSON.parse(localStorage.getItem('reservations')) || [];
        
        reservations.forEach((res, index) => {
            const li = document.createElement('li');
            li.textContent = `${res.name} - ${res.people} personas - ${res.date}`;
            
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.addEventListener('click', () => {
                deleteReservation(index);
            });
            
            li.appendChild(deleteButton);
            reservationsList.appendChild(li);
        });
    }

    function deleteReservation(index) {
        let reservations = JSON.parse(localStorage.getItem('reservations')) || [];
        reservations.splice(index, 1);
        localStorage.setItem('reservations', JSON.stringify(reservations));
        displayReservations();
    }

    // Inicializar la lista de reservas al cargar la página
    displayReservations();
});

