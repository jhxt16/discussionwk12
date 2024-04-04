document.getElementById("subscribe").addEventListener("click", function() {
    if(this.checked){
        document.getElementById("emailDiv").style.display = "block";
    } else {
        document.getElementById("emailDiv").style.display = "none";
    }
});

document.body.addEventListener("click", function() {
    let currentTime = new Date();
    alert("Current time: " + currentTime);
});