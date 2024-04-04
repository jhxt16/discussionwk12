// document.querySelector("#sameAddress").addEventListener("click", function(){
//     if(this.checked){
//         document.getElementById("home").value = document.getElementById("bill").value
//         document.getElementById("home").disabled = true
//     }

//     else{
//         document.getElementById("home").value = ""
//         document.getElementById("home").disabled = false
//     }
// })

document.querySelector("#sameAddress").addEventListener("click", function(){
    let bill = document.getElementById("bill");
    let home = document.getElementById("home");

    if (this.checked) {
        home.value = bill.value;
        home.disabled = true;
    } else {
        home.value = " ";
        home.disabled = false;
    }
})