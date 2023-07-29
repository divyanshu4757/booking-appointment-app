
let form = document.getElementById('form');
let ul= document.getElementById('add');
let name = document.getElementById('name');
let email = document.getElementById('exampleEmail');
let phone = document.getElementById('tel');


form.addEventListener('submit' ,(e)=>{
    e.preventDefault();
    

    
      

    axios({
        method: 'post',
        url: 'https://crudcrud.com/api/58db2725e4244229b93332a67d5ad2cb/appointmentApp',
        data:{
            Name:name.value,
            Email:email.value,
            Phone:phone.value,
        }
      })
      .then((res)=>{

        let id = res.data._id;

        let li =  document.createElement('li');
         
        li.append(document.createTextNode(name.value));
        li.append(document.createTextNode("-"));
    
        li.append(document.createTextNode(email.value));
        li.append(document.createTextNode("-"));
    
        li.append(document.createTextNode(phone.value));


        li.append(document.createTextNode(id));

       
    
        let button =  document.createElement('button');
        button.textContent = "delete";
        button.className="btn btn-secondary delete-that"
        li.append(button);
    
        let edit =  document.createElement('button');
        edit.textContent = "edit";
        edit.className="btn btn-success edit"
        li.append(edit);
       
        ul.appendChild(li);
    
        name.value = '';
        email.value ='';
        phone.value ='';})
      .catch(err=>console.log(err));




})


ul.addEventListener('click',(e)=>{
    if(e.target.classList.contains("delete-that")){

        let parent = e.target.parentNode;
        
      const nthElementChild =parent.childNodes[2].textContent;
       

       let id = parent.childNodes[5].textContent;

       console.log(id);


       axios.delete(`https://crudcrud.com/api/58db2725e4244229b93332a67d5ad2cb/appointmentApp/${id}`)
.then((res)=>{ parent.remove();})
.catch(err=>console.log(err));

       
         
    }   


    if(e.target.classList.contains("edit")){
        console.log(e.target.classList);
        let parent = e.target.parentNode;
        const nthName = parent.childNodes[0].textContent;

        const nthEmail = parent.childNodes[2].textContent;

        const nthNum = parent.childNodes[4].textContent;

        console.log(nthEmail);
        name.value = nthName;
        email.value = nthEmail;
        phone.value = nthNum;
        
        parent.remove();
    }
})




document.addEventListener('DOMContentLoaded', function() {
    
    axios('https://crudcrud.com/api/58db2725e4244229b93332a67d5ad2cb/appointmentApp')
.then((res)=>{


    for(let i=0; i<res.data.length; i++) {

    let n = res.data[i].Name;
    let e = res.data[i].Email;
    let p = res.data[i].Phone;
    let id = res.data[i]._id;
 


   
 


    let li =  document.createElement('li');
    li.append(document.createTextNode(n));
    li.append(document.createTextNode("-"));
    
    li.append(document.createTextNode(e));
    li.append(document.createTextNode("-"));
    
    li.append(document.createTextNode(p));
    li.append(document.createTextNode(id));


    console.log(li); // Check if li is defined and what it contains
    console.log(li.childNodes); // Check the child nodes of li
    console.log(li.childNodes[5]); // Check if li.childNodes[5] is defined

    let button =  document.createElement('button');
    button.textContent = "delete";
    button.className="btn btn-secondary delete-that"
    li.append(button);

    let edit =  document.createElement('button');
        edit.textContent = "edit";
        edit.className="btn btn-success edit"
        li.append(edit);

     ul.appendChild(li);
  
    }

    })
.catch(err=>console.log(err));
  });