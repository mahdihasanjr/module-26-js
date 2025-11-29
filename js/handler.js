   
//    1. click the btn and change the title;
        // example 1;
   document.getElementById('btn-update-title')
            .addEventListener('click', function (){
            // document.getElementById('page-title').innerText ='hello mama';
            const pageTextTitle = document.getElementById('page-title');
            // console.log(pageTextTitle)
            const design =pageTextTitle.innerText='hello js your best coding engine';
             
        })


                // example 2;
             document.getElementById('btn-login')
        .addEventListener('click',function (){
            const userInfo = document.getElementById('user-info');
           userInfo.innerText = 'User logged in successfully';
        })


        // click the btn and get the text from input field and set the name;
            // example 1; 

                //  1.  set eventListener;
        document.getElementById('btn-update')
        .addEventListener('click', function (){
            

            // 2. get the text from input field
            const nameInput = document.getElementById('input-name');
            // console.log(nameInput)
            const name = nameInput.value;
            // console.log('name', name)

            // 3. set the name;
            const nameLabel = document.getElementById('name');
            nameLabel.innerText=name
        })


        // example 2;