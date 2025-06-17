function showVisitMessage() {
    const lastVisit = localStorage.getItem('lastVisit');
    const currentDate = new Date();
  
    if (!lastVisit) {
      localStorage.setItem('lastVisit', currentDate.toString());
      showMessage('Welcome! If you have any questions, please let us know.');
    } else {
      const lastVisitDate = new Date(lastVisit);
      const difference = currentDate - lastVisitDate;
      const daysPassed = Math.floor(difference / (1000 * 60 * 60 * 24));
  
      if (daysPassed < 1) {
        showMessage(`I'll be back soon! Great!`);
      } else {
        let message = `The last time you visited was ${daysPassed} ${daysPassed === 1 ? 'day' : 'days'} ago.`;
        showMessage(message);
      }
  
      localStorage.setItem('lastVisit', currentDate.toString());
    }
  }
  
  function showMessage(message) {
    const messageElement = document.getElementById('message-welcome');
    messageElement.innerHTML = message;
  }
  
  document.addEventListener('DOMContentLoaded', showVisitMessage);
  
  let currentDate = new Date(); 
  const calendarTableBody = document.querySelector("#calendar-table tbody");
  const monthYearSpan = document.querySelector("#current-month-year");
  const prevMonthButton = document.querySelector("#prev-month");
  const nextMonthButton = document.querySelector("#next-month");
  const prevYearButton = document.querySelector("#prev-year");
  const nextYearButton = document.querySelector("#next-year");
  
  function updateCalendarHeader() {
      const monthNames = [
          "January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
      ];
  
      const monthName = monthNames[currentDate.getMonth()];
      const year = currentDate.getFullYear();
  
      monthYearSpan.innerText = `${monthName} ${year}`;
  }
  
  function generateCalendar() {
      calendarTableBody.innerHTML = "";
  
      const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
      const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
      const firstDayWeekday = firstDayOfMonth.getDay();
      const totalDaysInMonth = lastDayOfMonth.getDate();
  
      let row = document.createElement("tr");
  
      for (let i = 0; i < firstDayWeekday; i++) {
          row.appendChild(document.createElement("td"));
      }
  
      for (let day = 1; day <= totalDaysInMonth; day++) {
          if ((firstDayWeekday + day - 1) % 7 === 0 && day !== 1) {
              calendarTableBody.appendChild(row);
              row = document.createElement("tr");
          }
  
          const dayCell = document.createElement("td");
          dayCell.innerText = day;
          row.appendChild(dayCell);
      }
  
      calendarTableBody.appendChild(row);
  }
  
  prevMonthButton.addEventListener("click", () => {
      currentDate.setMonth(currentDate.getMonth() - 1); 
      updateCalendarHeader(); 
      generateCalendar(); 
  });
  
  nextMonthButton.addEventListener("click", () => {
      currentDate.setMonth(currentDate.getMonth() + 1); 
      updateCalendarHeader(); 
      generateCalendar(); 
  });
  
  prevYearButton.addEventListener("click", () => {
      currentDate.setFullYear(currentDate.getFullYear() - 1); 
      updateCalendarHeader(); 
      generateCalendar(); 
  });
  
  nextYearButton.addEventListener("click", () => {
      currentDate.setFullYear(currentDate.getFullYear() + 1); 
      updateCalendarHeader(); 
      generateCalendar(); 
  });
  
  function initializeCalendar() {
      updateCalendarHeader(); 
      generateCalendar(); 
  }
  
  document.addEventListener("DOMContentLoaded", initializeCalendar);
  


const cards = document.querySelector('#photo-cards');
let photos = []

async function getPhotoData() {
    try {
        console.log(photos);
        const response = await fetch('./data/photos.json');
        if (!response.ok) {
            throw new Error('Could not fetch photo data');
        }
        photos = await response.json();
        console.log(photos);

        displayPhotoCards()
    } catch (error) {
        console.error("Encountered error during fetch:", error);
    }
}

getPhotoData();

function displayPhotoCards() {
    cards.innerHTML = '';

    const shuffledPhotos = photos.sort(() => 0.5 - Math.random());

    shuffledPhotos.forEach((photo, index) => {
        const card = document.createElement('section');
        const image = document.createElement('img');
        const caption = document.createElement('p');

        card.setAttribute('class', 'card');
        image.setAttribute('class', 'hover');
        image.setAttribute('src', `images/${photo.imagefile}`);
        if (index !== 0) {
            image.setAttribute('loading', 'lazy');
        }
        image.setAttribute('width', '150');
        image.setAttribute('height', 'auto');
        image.setAttribute('alt', `Photo of ${photo.name}`);
        caption.textContent = photo.caption;
        caption.setAttribute('class', 'caption');

        
        card.appendChild(image);
        card.appendChild(caption);

       
        cards.appendChild(card);
    })
}

document.addEventListener("DOMContentLoaded", function () {
    const visitMessage = document.getElementById("visit-message");
    const lastVisitKey = "lastVisit";
    const now = new Date();

    const lastVisit = localStorage.getItem(lastVisitKey);

    let message = "";

    if (!lastVisit) {
        message = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisitDate = new Date(lastVisit);
        const timeDifference = now - lastVisitDate;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (timeDifference < 24 * 60 * 60 * 1000) {
            message = "Back so soon! Awesome!";
        } else {
            message = `You last visited ${daysDifference} day${daysDifference === 1 ? "" : "s"} ago.`;
        }
    }
    visitMessage.textContent = message;
    localStorage.setItem(lastVisitKey, now.toISOString());
});
