const textareaEl = document.getElementById("textarea");

// let count = 0;

// textareaEl.addEventListener("keyup", ()=> {
//     count++;
//     if(count <= document.get && count >= 0) {
//         document.getElementById("total-char").innerHTML = `Total Characters: ${count}`;
//         document.getElementById("remaining").innerHTML = `Remaining: ${100 - count}`;
//     }
// });

textareaEl.addEventListener("keyup", ()=> {
    
    document.getElementById('total-char').innerHTML = textareaEl.value.length;
    document.getElementById('remaining').innerHTML = textareaEl.getAttribute("maxlength") - textareaEl.value.length;
});