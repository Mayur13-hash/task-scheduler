// List of people
const names = ["Yash", "Himanshu", "Nakul", "Mayur","Rishikesh"];
// Get task, month, and year from the query string
const urlParams = new URLSearchParams(window.location.search);
const task = urlParams.get("task");
const month = urlParams.get("month");
const year = urlParams.get("year");

// Get references to the HTML elements
const taskDetails = document.getElementById("taskDetails");
const schedule = document.getElementById("schedule");

if (task && month && year) {
    // Display task and selected month
    const monthName = new Date(year, month - 1).toLocaleString('default', { month: 'long' });
    taskDetails.innerHTML = `<strong>Task:</strong> ${task}<br><strong>Month:</strong> ${monthName} ${year}`;

    // Generate schedule for the month
    const daysInMonth = new Date(year, month, 0).getDate(); // Number of days in the month
    let html = "<ul>";

    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month - 1, day);
        const weekday = date.toLocaleString('default', { weekday: 'long' });
        const assignee = names[(day - 1) % names.length]; // Loop through names
        html += `<li><strong>${weekday}, ${date.toDateString()}:</strong> ${assignee}</li>`;
    }

    html += "</ul>";
    schedule.innerHTML = html;
} else {
    taskDetails.innerHTML = `<strong>Error:</strong> Missing task or month/year information.`;
}
