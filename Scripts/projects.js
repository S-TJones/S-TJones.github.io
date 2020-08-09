
// Array of current projects
const projects = [{ id: 1, name: "project-1",
                    'project-img': "/Photos/...",
                    overview: "Lorem ipsum..."}, 
                  { id: 2, name: "project-2",
                    'project-img': "/Photos/...",
                    overview: "Lorem ipsum..."}, 
                  { id: 3, name: "project-3,
                    'project-img': "/Photos/...",
                    overview: "Lorem ipsum..."}, 
                  { id: 4, name: "project-4",
                    'project-img': "/Photos/...",
                    overview: "Lorem ipsum..."}];
                    
// Get all the ID's
const project = document.getElementById("project-title");
const img = document.getElementById("project-img");
const summary = document.getElementById("overview");

const prev_btn = document.querySelector(".prev-btn");
const next_btn = document.querySelector(".next-btn");

// Holds the object from the array, representing a project 
let current_project = 0;

// DOM
window.addEventListener("DOMContentLoaded", function() {
    const obj = projects[current_project];
    
    project.textContent = obj.name;
    img.src = obj.'project-img'
    summary.textContent = obj.overview;
});
