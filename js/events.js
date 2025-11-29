
// option 1;
console.log('external file')



// option 2 to handle events;
function makeYellow(){
    document.body.style.backgroundColor = 'yellow';
    
}

function makeGreen(){
    document.body.style.backgroundColor= 'green';
    document.body.style.color = 'white'
}



const btns = document.getElementsByTagName('button');
    for(const btn of btns){
        btn.style.margin = '10px'
        btn.style.padding = '5px 10px';
        btn.style.borderRadius = '5px';
        btn.style.border = 'none';
    }

    // option 3 : get element by id and then set onclick;

    const btnMakeBlue= document.getElementById('btn-make-blue');

    btnMakeBlue.onclick = function makeBlue(){
    document.body.style.backgroundColor = 'blue';
    document.btnMakeBlue.style.backgroundColor = 'dark';
   
}

     // option 3 different version: get element by id and then set onclick; 

        const btnMakePurple = document.getElementById('btn-make-purple')
        // console.log(btnMakePurple)
        btnMakePurple.onclick = makePurple;
        function makePurple(){
            document.body.style.backgroundColor='purple'
        }


        // option 4 : addEventListener;
        // document.getElementById().addEventListener('event type', handler);

        document.getElementById('btn-make-gray').addEventListener('click', function makeGray(){
            document.body.style.backgroundColor='gray'
        }) 

        document.getElementById('btn-make-gold')
            .addEventListener('mouseover', function (){
                document.body.style.backgroundColor='goldenrod'
        })




        
        