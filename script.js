let form = document.querySelector('form');

form.addEventListener('submit', function(event){
    event.preventDefault();
    alert('TY for subscribing, ur a good person');
    run();
})

function run(){
    let inputs = document.querySelectorAll('input');
    let result = [];
    for(let i = 0; i < inputs.length; i++){
        result.push(inputs[i].value);
    }
    console.log(result)
}