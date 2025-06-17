export function openModal() {
    const modal = document.getElementById('modal');
    modal.showModal();
}

export function closeModal() {
    const modal = document.getElementById('modal');
    modal.close();
}

export function setupModalEvents() {
    const modal = document.getElementById('modal');
    const closeButton = document.getElementById('close'); 

    closeButton.addEventListener('click', function() {
        closeModal();
    });

    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
}
