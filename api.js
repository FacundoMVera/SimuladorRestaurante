
async function obtenerMenu() {
    const menuContainer = document.getElementById('menu'); 

    if (!menuContainer) {
        console.error('Elemento con ID "menu" no encontrado.');
        return;
    }

    try {
        const apiKey = '97de348297764bafa4252b440df1029f'; 
        const respuesta = await fetch(`https://api.spoonacular.com/food/menuItems/search?query=restaurant&apiKey=${apiKey}`);
        
        if (!respuesta.ok) {
            throw new Error(`Error al obtener datos: ${respuesta.statusText}`);
        }

        const datos = await respuesta.json();
        const menu = datos.menuItems;

        if (!menu || !menu.length) {
            menuContainer.innerHTML = '<p>No se encontraron elementos del menú.</p>';
            return;
        }

        
        menuContainer.innerHTML = menu.map(item => `
            <div class="menu-item">
                <h3>${item.title}</h3>
                <p>${item.description || 'No hay descripción disponible.'}</p>
                <p>Precio: ${item.price || 'No disponible'}</p>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error al cargar el menú:', error);
        menuContainer.innerHTML = '<p>Error al cargar el menú. Intenta de nuevo más tarde.</p>';
    }
}


document.addEventListener('DOMContentLoaded', () => {
    obtenerMenu();
});
