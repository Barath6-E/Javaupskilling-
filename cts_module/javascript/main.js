// console.log('welcome to the community portal')
// alert('This is an alert message')
// 2
// const eventName = "Community Meetup";
// const eventDate = "June 15, 2025";
// let availableSeats = 50;

// const eventDetails = `Event: ${eventName}\nDate: ${eventDate}\nAvailable Seats: ${availableSeats}`;
// console.log(eventDetails);

// function registerUser() {
//     if (availableSeats > 0) {
//         availableSeats--;
//         console.log(`Registration successful! Remaining seats: ${availableSeats}`);
//     } else {
//         console.log("Sorry, the event is fully booked.");
//     }
// }

// function cancelRegistration() {
//     availableSeats++;
//     console.log(`Registration canceled. Available seats: ${availableSeats}`);
// }

// registerUser();
// registerUser();
// cancelRegistration();

// 3
// const events = [
//     { name: "Tech Conference", date: "2025-06-20", seats: 10 },
//     { name: "Music Festival", date: "2024-05-10", seats: 0 },
//     { name: "Art Workshop", date: "2025-07-15", seats: 5 }
// ];

// function displayEvents() {
//     const currentDate = new Date().toISOString().split("T")[0];
//     events.forEach(event => {
//         if (event.date >= currentDate && event.seats > 0) {
//             console.log(`Event: ${event.name}, Date: ${event.date}, Available Seats: ${event.seats}`);
//         }
//     });
// }

// function registerForEvent(eventName) {
//     try {
//         let event = events.find(e => e.name === eventName);
//         if (!event) throw new Error("Event not found!");
//         if (event.date < new Date().toISOString().split("T")[0]) throw new Error("Event has already passed!");
//         if (event.seats <= 0) throw new Error("No seats available!");
        
//         event.seats--;
//         console.log(`Successfully registered for ${eventName}. Remaining seats: ${event.seats}`);
//     } catch (error) {
//         console.log(`Error: ${error.message}`);
//     }
// }

// displayEvents();
// registerForEvent("Tech Conference");
// registerForEvent("Music Festival");

// 4
// function eventManager() {
//     const events = [];
//     const registrations = {};

//     function addEvent(name, date, category, seats) {
//         events.push({ name, date, category, seats });
//     }

//     function registerUser(eventName) {
//         const event = events.find(e => e.name === eventName);
//         if (!event || event.seats <= 0) throw new Error("Registration failed");
//         event.seats--;
//         registrations[event.category] = (registrations[event.category] || 0) + 1;
//         return `Registered for ${eventName}`;
//     }

//     function filterEventsByCategory(category) {
//         return events.filter(event => event.category === category);
//     }

//     function getTotalRegistrationsByCategory(category) {
//         return registrations[category] || 0;
//     }

//     return { addEvent, registerUser, filterEventsByCategory, getTotalRegistrationsByCategory };
// }

// const manager = eventManager();
// manager.addEvent("Tech Conference", "2025-06-20", "Technology", 10);
// manager.addEvent("Music Festival", "2025-07-15", "Music", 5);
// console.log(manager.registerUser("Tech Conference"));
// console.log(manager.getTotalRegistrationsByCategory("Technology"));
// console.log(manager.filterEventsByCategory("Music"));

// function Event(name, date, category, seats) {
//     this.name = name;
//     this.date = date;
//     this.category = category;
//     this.seats = seats;
// }

// Event.prototype.checkAvailability = function() {
//     return this.seats > 0 ? `Seats: ${this.seats}` : "Fully booked";
// };

// const event1 = new Event("Tech Conference", "2025-06-20", "Technology", 10);
// const event2 = new Event("Music Festival", "2025-07-15", "Music", 0);

// console.log(event1.checkAvailability());
// console.log(event2.checkAvailability());
// console.log(Object.entries(event1));

// 5
// function Event(name, date, seats) {
//     this.name = name;
//     this.date = date;
//     this.seats = seats;
// }

// Event.prototype.checkAvailability = function() {
//     return this.seats > 0 ? `Seats available: ${this.seats}` : "Fully booked";
// };

// const event1 = new Event("Tech Conference", "2025-06-20", 10);
// const event2 = new Event("Music Festival", "2025-07-15", 0);

// console.log(event1.checkAvailability());
// console.log(event2.checkAvailability());
// console.log(Object.entries(event1));

// 6
// let events = [
//     { name: "Tech Conference", category: "Technology", date: "2025-06-20" },
//     { name: "Music Festival", category: "Music", date: "2025-07-15" },
//     { name: "Art Workshop", category: "Art", date: "2025-08-10" }
// ];

// function addEvent(name, category, date) {
//     events.push({ name, category, date });
// }

// function updateEvent(name, newDetails) {
//     events = events.map(event => event.name === name ? { ...event, ...newDetails } : event);
// }

// function deleteEvent(name) {
//     events = events.filter(event => event.name !== name);
// }

// function filterMusicEvents() {
//     return events.filter(event => event.category === "Music");
// }

// function formatEvents() {
//     return events.map(event => `${event.category} Event: ${event.name} on ${event.date}`);
// }

// addEvent("Jazz Night", "Music", "2025-09-05");
// updateEvent("Music Festival", { date: "2025-07-20" });
// deleteEvent("Art Workshop");

// console.log(filterMusicEvents());
// console.log(formatEvents());

// 7dom
// //const events = [
//     { name: "Tech Conference", date: "2025-06-20", seats: 10 },
//     { name: "Music Festival", date: "2025-07-15", seats: 5 }
// ];

// function displayEvents() {
//     const container = document.querySelector("#event-container");
//     container.innerHTML = "";

//     events.forEach(event => {
//         const card = document.createElement("div");
//         card.classList.add("event-card");
//         card.innerHTML = `<h3>${event.name}</h3><p>Date: ${event.date}</p><p>Seats: ${event.seats}</p>
//                           <button onclick="register('${event.name}')">Register</button>`;
//         container.appendChild(card);
//     });
// }

// function register(eventName) {
//     const event = events.find(e => e.name === eventName);
//     if (event && event.seats > 0) {
//         event.seats--;
//         displayEvents();
//         alert(`Registered for ${eventName}`);
//     } else {
//         alert("No seats available");
//     }
// }

// displayEvents();


// 8 
// const events = [
//     { name: "Tech Conference", category: "Technology", date: "2025-06-20", seats: 10 },
//     { name: "Music Festival", category: "Music", date: "2025-07-15", seats: 5 },
//     { name: "Art Workshop", category: "Art", date: "2025-08-10", seats: 8 }
// ];

// function displayEvents(filteredEvents = events) {
//     const container = document.querySelector("#event-container");
//     container.innerHTML = "";

//     filteredEvents.forEach(event => {
//         const card = document.createElement("div");
//         card.classList.add("event-card");
//         card.innerHTML = `<h3>${event.name}</h3><p>Date: ${event.date}</p><p>Seats: ${event.seats}</p>
//                           <button onclick="register('${event.name}')">Register</button>`;
//         container.appendChild(card);
//     });
// }

// function register(eventName) {
//     const event = events.find(e => e.name === eventName);
//     if (event && event.seats > 0) {
//         event.seats--;
//         displayEvents();
//         alert(`Registered for ${eventName}`);
//     } else {
//         alert("No seats available");
//     }
// }

// document.querySelector("#category-filter").addEventListener("change", function() {
//     const category = this.value;
//     const filteredEvents = events.filter(event => event.category === category || category === "All");
//     displayEvents(filteredEvents);
// });

// document.querySelector("#search-box").addEventListener("keydown", function() {
//     const searchTerm = this.value.toLowerCase();
//     const filteredEvents = events.filter(event => event.name.toLowerCase().includes(searchTerm));
//     displayEvents(filteredEvents);
// });

// displayEvents();



// 9async
// document.addEventListener("DOMContentLoaded", function () {
//     const events = [
//         { name: "Tech Conference", category: "Technology", date: "2025-06-20", seats: 10 },
//         { name: "Music Festival", category: "Music", date: "2025-07-15", seats: 5 },
//         { name: "Art Workshop", category: "Art", date: "2025-08-10", seats: 8 }
//     ];

//     function displayEvents(filteredEvents = events) {
//         const container = document.querySelector("#event-container");
//         container.innerHTML = "";

//         filteredEvents.forEach(event => {
//             const card = document.createElement("div");
//             card.classList.add("event-card");
//             card.innerHTML = `<h3>${event.name}</h3><p>Date: ${event.date}</p><p>Seats: ${event.seats}</p>
//                               <button onclick="register('${event.name}')">Register</button>`;
//             container.appendChild(card);
//         });
//     }

//     function register(eventName) {
//         const event = events.find(e => e.name === eventName);
//         if (event && event.seats > 0) {
//             event.seats--;
//             displayEvents();
//             alert(`Registered for ${eventName}`);
//         } else {
//             alert("No seats available");
//         }
//     }

//     document.querySelector("#category-filter").addEventListener("change", function () {
//         const category = this.value;
//         const filteredEvents = events.filter(event => event.category === category || category === "All");
//         displayEvents(filteredEvents);
//     });

//     document.querySelector("#search-box").addEventListener("keydown", function () {
//         const searchTerm = this.value.toLowerCase();
//         const filteredEvents = events.filter(event => event.name.toLowerCase().includes(searchTerm));
//         displayEvents(filteredEvents);
//     });

//     displayEvents();
// });

// 10
// const events = [
//     { name: "Tech Conference", category: "Technology", date: "2025-06-20", seats: 10 },
//     { name: "Music Festival", category: "Music", date: "2025-07-15", seats: 5 },
//     { name: "Art Workshop", category: "Art", date: "2025-08-10", seats: 8 }
// ];

// const displayEvents = (filteredEvents = [...events]) => {
//     const container = document.querySelector("#event-container");
//     container.innerHTML = "";

//     filteredEvents.forEach(({ name, date, seats }) => {
//         const card = document.createElement("div");
//         card.classList.add("event-card");
//         card.innerHTML = `<h3>${name}</h3><p>Date: ${date}</p><p>Seats: ${seats}</p>
//                           <button onclick="register('${name}')">Register</button>`;
//         container.appendChild(card);
//     });
// };

// const register = (eventName) => {
//     const event = events.find(e => e.name === eventName);
//     if (event?.seats > 0) {
//         event.seats--;
//         displayEvents();
//         alert(`Registered for ${eventName}`);
//     } else {
//         alert("No seats available");
//     }
// };

// document.querySelector("#category-filter").addEventListener("change", ({ target }) => {
//     const filteredEvents = [...events].filter(event => event.category === target.value || target.value === "All");
//     displayEvents(filteredEvents);
// });

// document.querySelector("#search-box").addEventListener("keydown", ({ target }) => {
//     const filteredEvents = [...events].filter(event => event.name.toLowerCase().includes(target.value.toLowerCase()));
//     displayEvents(filteredEvents);
// });

// displayEvents();

// 11

// document.getElementById("registrationForm").addEventListener("submit", function(event) {
//     event.preventDefault();

//     const { name, email, event: selectedEvent } = event.target.elements;
//     const nameValue = name.value.trim();
//     const emailValue = email.value.trim();
//     const eventValue = selectedEvent.value;

//     let valid = true;

//     document.getElementById("nameError").textContent = nameValue ? "" : "Name is required";
//     document.getElementById("emailError").textContent = emailValue ? "" : "Email is required";
//     document.getElementById("eventError").textContent = eventValue ? "" : "Please select an event";

//     valid = nameValue && emailValue && eventValue;

//     if (valid) {
//         alert(`Successfully registered for ${eventValue}!`);
//         event.target.reset();
//     }
// });

// 12

// async function registerUser(userData) {
//     try {
//         console.log("Sending registration data...");
//         document.getElementById("loading").style.display = "block"; // Show loading spinner

//         const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(userData)
//         });

//         setTimeout(async () => {
//             document.getElementById("loading").style.display = "none"; // Hide spinner
//             const result = await response.json();
//             console.log("Registration successful:", result);
//             alert("Registration successful!");
//         }, 2000); // Simulating delay
//     } catch (error) {
//         console.error("Error registering user:", error);
//         alert("Registration failed!");
//     }
// }

// document.getElementById("registerBtn").addEventListener("click", () => {
//     const userData = { name: "John Doe", email: "john@example.com", event: "Tech Conference" };
//     registerUser(userData);
// });

// 13


// document.getElementById("registrationForm").addEventListener("submit", function(event) {
//     event.preventDefault();
//     console.log("Form submission started");

//     const { name, email, event: selectedEvent } = event.target.elements;
//     console.log("Captured values:", { name: name.value, email: email.value, event: selectedEvent.value });

//     fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name: name.value, email: email.value, event: selectedEvent.value })
//     })
//     .then(response => response.json())
//     .then(data => console.log("Server response:", data))
//     .catch(error => console.error("Fetch error:", error));
// });

// 14

// $(document).ready(function() {
//     $("#registerBtn").click(function() {
//         alert("User registered!");
//     });

//     $(".event-card").fadeOut(1000).fadeIn(1000);
// });

