document.querySelector("#ch3form").addEventListener("submit", function(event) {
    let date = document.querySelectorAll('input[name="gradDate"]:checked').length;
    let standing = document.querySelectorAll('input[name="standing"]:checked').length;

    if (date === 0 || standing === 0) {
        alert("Please select a graduation date and standing.");
        event.preventDefault();
    }
})