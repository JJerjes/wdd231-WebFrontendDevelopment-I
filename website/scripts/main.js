import { openModal, closeModal, setupModalEvents } from './modal.js'; // Corregí la ruta aquí
import { toggleMenu } from './menu.js';

document.addEventListener('DOMContentLoaded', () => {
    openModal();  
    setupModalEvents();  
    toggleMenu();  
});
