const inp = document.getElementById('inp');
const inpBtn = document.getElementById('inpBtn');
let taskUl = document.getElementById('myTaskList');
editBtn = document.querySelectorAll('.editBtn');

// array for storing task lists
let listArr = [];
let updateId;
let check = false;
// isUpdate = false;

function addElement(input_val){

    listArr.push(inpVal);
    let lastIndex = listArr.length - 1;


    // ! add li input and btns ---------------------------------------------------
    // create a div for btns
    btnDiv = document.createElement('div');
    btnDiv.classList.add('actionDiv');

    // ! create edit and delete btn element
    //* delete btn
    delBtn = document.createElement('button');
    // delBtn.textContent = 'x';
    delBtn.innerHTML = 'x';
    delBtn.classList.add('deleteBtn');
    //* edit btn
    editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('editBtn');

    // append those BUTTONS in btnDiv(.actionDiv);
    btnDiv.appendChild(editBtn);
    btnDiv.appendChild(delBtn);
    // !-------------------------------------------------------------------
    // list item added in ul
    const list = document.createElement('li');
    list.id = lastIndex;

    listArr.forEach((e,i) => {
        unique = document.createElement('div');
        unique.textContent = e;
        // unique.setAttribute('id',i);
        console.log(unique);
        // taskInput.value =  e;
    });
    
    list.appendChild(unique);
    list.appendChild(btnDiv);

    taskUl.appendChild(list);

    // ! remove functionality----------------------------------------------
    closeBtnLists = document.querySelectorAll('.deleteBtn');

    closeBtnLists.forEach(e => {
        e.addEventListener('click',()=>{
            inp.val = '';
            c = e.parentElement.parentElement ;
            c.remove(); 
            uniqueDiv = e.target.parentElement.parentElement.children[0];
            uniqueId = uniqueDiv.getAttribute('id');
        });
    });
    // ! update functionality----------------------------------------------
    editBtn.addEventListener('click',(e)=>{

        // isUpdate = true;
        btnText = e.target.innerText;


        const uniqueDiv = e.target.parentElement.parentElement.children[0];
        updateId = e.target.parentElement.parentElement.getAttribute('id');


        check = listArr.includes(uniqueDiv.innerHTML);
        
        console.log(uniqueDiv.innerHTML + "  : " + uniqueDiv.getAttribute('id'));
        ind = uniqueDiv.getAttribute('id');
        console.log('array : '+listArr[ind]);
        
        if (btnText == 'Edit') {
            inp.value = uniqueDiv.textContent;
            inp.focus();

        }
    });
    // !-------------------------------------------------------------------------
}


//* add btn event listener-----------------------

inpBtn.addEventListener('click',()=>{
    inpVal = inp.value;
    id=0;
    if (inpVal == '') {
        alert("never enter empty task");
    }
    else{

        
        if (check) {
            console.log('exists : ' + inp.value);
            console.log('id : ' + updateId);
            listArr[updateId] = inp.value;
            
            // select li by id
            document.getElementById(updateId).children[0].innerHTML = listArr[updateId] ;
            // console.log(a);
            inp.value = '';
            
            check = false;

        }
        else{
            addElement(inp.value)
            inp.value = '';
        }

        
    
        
    }
})