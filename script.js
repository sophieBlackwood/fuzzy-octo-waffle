// ===== Hamburger Menu =====
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// ===== Smooth Scrolling =====
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
}

// Optional: Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

// ===== Random Octo Fact =====
const octoFacts = [
    "Octopuses have three hearts. Coincidence? I think not.",
    "An octopus can taste with its arms. Imagine spaghetti tasting your arms back!",
    "Octopuses can squeeze through holes the size of their beak. Be careful!",
    "Octopuses have blue blood. Fancy, right?",
    "Octopuses are master escape artists. Maybe they're coding behind your back..."
];

function showOctoFact() {
    const randomIndex = Math.floor(Math.random() * octoFacts.length);
    alert(octoFacts[randomIndex]);
}

// Example: create a button dynamically for Octo Fact
const hero = document.querySelector(".hero .container");
const factBtn = document.createElement("button");
factBtn.textContent = "Give Me a Random Octo Fact 🐙";
factBtn.onclick = showOctoFact;
factBtn.style.marginTop = "1rem";
hero.appendChild(factBtn);
