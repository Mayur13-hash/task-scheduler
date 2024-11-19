const taskForm = document.getElementById("taskForm");
const monthSelect = document.getElementById("month");
const yearSelect = document.getElementById("year");

// Populate month dropdown
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
months.forEach((month, index) => {
    const option = document.createElement("option");
    option.value = index + 1; // Month is 1-based
    option.textContent = month;
    monthSelect.appendChild(option);
});

// Populate year dropdown (current year +/- 5 years)
const currentYear = new Date().getFullYear();
for (let year = currentYear - 5; year <= currentYear + 5; year++) {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
}

// Handle form submission
taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const task = document.getElementById("task").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;

    if (task && month && year) {
        // Redirect to the schedule page with task, month, and year in the query string
        window.location.href = `schedule.html?task=${encodeURIComponent(task)}&month=${month}&year=${year}`;
    } else {
        alert("Please fill in all fields.");
    }
});
