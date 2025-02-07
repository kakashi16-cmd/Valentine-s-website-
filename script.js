document.getElementById("noButton").addEventListener("mouseover", function() {
    const x = Math.random() * (window.innerWidth - this.clientWidth);
    const y = Math.random() * (window.innerHeight - this.clientHeight);
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});

document.getElementById("noButton").addEventListener("click", function() {
    alert("You can't say no! 😆");
});
