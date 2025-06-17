document.addEventListener("DOMContentLoaded", function() {
    // Modal logic
    const modal = document.getElementById("modal");
    const closeButton = document.getElementById("close");

    if (modal) {
        modal.showModal();

        if (closeButton) {
            closeButton.addEventListener("click", function() {
                modal.close();
            });
        }

        modal.addEventListener("click", function(event) {
            if (event.target === modal) {
                modal.close();
            }
        });
    }

    const testimonials = [
        {
            name: "Erika Salazar",
            message: "Thanks to Fisio Carrillo I was able to recover from a sports injury in record time. Highly recommended!"
        },
        {
            name: "Fabio Yilizarbe",
            message: "The Fisio Carrillo team helped me improve my mobility and quality of life after knee surgery."
        },
        {
            name: "Mauricio Segura",
            message: "Without a doubt the best physiotherapy centers I have ever visited. His staff is always attentive and very kind to each of the patients. Their experience means that from the first consultation they give you a good diagnosis and help monitor injuries and ailments."
        },
        {
            name: "Ricardo Chavez",
            message: "An excellent 100% professional service keeps the athlete in optimal conditions and constant rehabilitation through the best treatments and rehabilitation equipment."
        }
    ];

    const testimonialContainer = document.querySelector('#testimonial-container');
    if (testimonialContainer) {
        testimonials.forEach(testimonial => {
            const testimonialElement = document.createElement('div');
            testimonialElement.classList.add('testimonial');
            testimonialElement.innerHTML = `
                <p>"${testimonial.message}"</p>
                <p>- ${testimonial.name}</p>
            `;
            testimonialContainer.appendChild(testimonialElement);
        });
    }
});
