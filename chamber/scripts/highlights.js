async function showDestacados() {
    const res = await fetch('/chamber/data/members.json');
    const data = await res.json();
    const goldSilver = data.filter( m => m.membership=== "gold" || m.membership === "silver" );
    const seleccionados = goldSilver.sort( () => 0.5 - Math.random() ).slice(0, 3);
    const container = document.getElementById('highlight-container');
    
    seleccionados.forEach( m => {
        const card = document.createElement('div');
        card.classList.add('highlight-card');

        card.innerHTML = `
            <img src="${m.logo}" alt="Logo de ${m.name}">
            <p><strong>Tel:</strong> ${m.phone}</p>        
            <p><strong>Address:</strong> ${m.address}</p>       
            <p><strong>Web:</strong> ${m.website}</p>        
            <p><strong>Membership:</strong> ${m.membership}</p>        
        `;
        container.appendChild(card);
    });
}
document.addEventListener("DOMContentLoaded", showDestacados);