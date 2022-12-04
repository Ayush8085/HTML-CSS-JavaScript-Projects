let string = "";
let buttons = document.querySelectorAll('.buttons')
Array.from(buttons).forEach(button => {
    button.addEventListener('click', (e)=>{
        // console.log(e.target);
        if(e.target.innerHTML=='=') {
            try {
                string = eval(string);
                document.querySelector('input').value = string;
            }
            catch(error) {
                document.querySelector('input').value = error.message;
            }

            // string = eval(string);
            // document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML=='C') {
            string = "";
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML=='back') {
            string = string.substring(0, string.length-1);
            document.querySelector('input').value = string;
        }
        else {
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
});