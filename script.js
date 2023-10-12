document.addEventListener("DOMContentLoaded", function() {
    const containers = document.querySelectorAll(".container");
    const unreadElements = document.querySelectorAll(".unread");
    const newNumElement = document.getElementById("number");
    const markButton = document.getElementById("mark");
    const privateContainer = document.getElementById("private");
    const drop = document.getElementById("drop");

    let num = Math.floor(Math.random() * 7) + 1; // Generates a random number between 1 and 7
    newNumElement.textContent = num;

    containers.forEach((container, index) => {
        container.addEventListener("click", function () {
            container.style.backgroundColor = "white";
            unreadElements[index].classList.add("active");
            updateUnreadCount();
        });
    });

    privateContainer.addEventListener("click", function () {
        drop.style.border = "1px solid hsl(219, 12%, 42%)";
    });

    markButton.addEventListener("click", markAll);

    function markAll() {
        containers.forEach((container) => {
            container.style.backgroundColor = "white";
            unreadElements.forEach((unread) => {
                unread.classList.add("active");
            });
            updateUnreadCount();
        });
    }

    function updateUnreadCount() {
        newNumElement.innerHTML = num - document.querySelectorAll(".active").length;
    }
});
