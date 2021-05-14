const container1 = document.querySelector(".container1");
const container2 = document.querySelector(".container2");
const container3 = document.querySelector(".container3");
const createBtn = document.querySelector(".create");
const plusIcn = document.querySelector(".Plus-icon");
const crossIcn = document.querySelector(".Cross-icon");
const textAr = document.getElementById('note-text');

let i = 0;

crossIcn.addEventListener('click', function(){
    container3.style.display = 'none';
    console.log('Clicked +')
});

createBtn.addEventListener('click', function(){
    container3.style.display = 'block'
})

plusIcn.addEventListener('click', function(){
    createNote();
    console.log('Clicked x')
})

textAr.addEventListener('keyup', function(e){
    if(e.key == 'Enter'){
        createNote();
    }
})

function createNote(){
    const noteTxt = document.getElementById("note-text").value;

    const node1 = document.createElement('div');
    const node2 = document.createElement('h4');

    node2.innerHTML = noteTxt;

    node1.setAttribute("style", 
    'width:250px; height:250px; font-size:26px; padding: 25px; margin: 10px; overflow: hidden; box-shadow: 10px 10px 24px 0px rgba(0, 0, 0, 0.50);')

     node1.style.background = color();
    //node2.style.margin = margin();
    
    node1.appendChild(node2);
    container2.insertAdjacentElement("beforeend", node1);

    node1.addEventListener('mouseenter', function(){
        node1.style.transform = 'scale(1.1)';
        node1.style.transition = '0.3s';
    })

     node1.addEventListener('mouseleave', function(){
        node1.style.transform = 'scale(1)';
        node1.style.transition = '0.3s';
    })

    node1.addEventListener('dblclick', function(){
        node1.remove();
    })

    textAr.value = '';

}

function margin(){
    let random_margin = ['-5px', '1px', '5px', '10px', '15px', '20px'];
    return random_margin(Math.floor(Math.random()*random_margin.length))
}

function color(){
    let random_color = ['pink', 'yellow', 'orange', 'purple'];

    if(i > random_color.length-1){
        i = 0;
    }
     return random_color[i++]
}