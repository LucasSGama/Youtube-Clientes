ShowData();
function ShowData() {
    const url = 'http://127.0.0.1:80/PHP/Youtube-Clientes/read.php';

    fetch(url,{
        method:"GET"
    }).then(response => response.text())
    .then(response => results.innerHTML=response)
    .catch(err => console.log(err))
}


function createUser() {
    const name = document.getElementById('name').value
    const cpf = document.getElementById('cpf').value
    const address = document.getElementById('address').value
    const telephone = document.getElementById('telephone').value
    const email = document.getElementById('email').value

    const form = new FormData();

    form.append('name', name);
    form.append('cpf', cpf);
    form.append('address', address);
    form.append('telephone', telephone);
    form.append('email', email);
    
    const url = 'http://127.0.0.1:80/PHP/Youtube-Clientes/cadastro.php';

    fetch(url,{
        method:'POST',
        body:form
    }).then(response => {
        response.json().then(result =>{
            // console.log(result)
            Swal.fire(result.message);

            document.getElementById('name').value = "";
            document.getElementById('cpf').value = "";
            document.getElementById('address').value = "";
            document.getElementById('telephone').value = "";
            document.getElementById('email').value = "";
        })
    }).catch(err => console.log(err))

}

// Função de excluir usuario

function remove(id){
    const form = new FormData();
    form.append('id', id);

    const url = 'http://127.0.0.1:80/PHP/Youtube-Clientes/remove.php';

    Swal.fire({
        title: "Você tem certeza?",
        text: "Essa ação não pode ser desfeita",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText:"Cancelar",
        confirmButtonText: "Sim, excluir!"
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(url, {
                method:"POST",
                body:form
            }).then(response =>{
                response.json().then(data => {
                    Swal.fire(data.message);
                    ShowData();
                })
            }).catch(err => console.log(err));
        }
      });

}

// Swal.fire({
//     title: "Deleted!",
//     text: "Your file has been deleted.",
//     icon: "success"
//   });

function getID(id) {
    const form = new FormData();
    form.append('id', id);
    const url = "http://127.0.0.1:80/PHP/Youtube-Clientes/get_id.php";

    fetch(url,{
        method:"POST",
        body:form
    }).then(response=>{
        response.json().then(data=>{
            // console.log(data);
            window.localStorage.setItem('user',JSON.stringify(data));
            window.location.href="update.html";
        })
    })
}

userData()
function userData() {
    const data = JSON.parse(localStorage.getItem('user'));
    const user = data[0];
    
    document.getElementById('id').value = user.id;
    document.getElementById('name-1').value = user.name;
    document.getElementById('cpf-1').value = user.cpf;
    document.getElementById('address-1').value = user.address;
    document.getElementById('telephone-1').value = user.telephone;
    document.getElementById('email-1').value = user.email;
    // console.log(user)
}

function updateUser() {
    const id = document.getElementById('id').value;
    const name = document.getElementById('name-1').value;
    const cpf = document.getElementById('cpf-1').value;
    const address = document.getElementById('address-1').value;
    const telephone = document.getElementById('telephone-1').value;
    const email = document.getElementById('email-1').value;

    const form = new FormData();

    form.append('id', id);
    form.append('name', name);
    form.append('cpf', cpf);
    form.append('address', address);
    form.append('telephone', telephone);
    form.append('email', email);

    const url = "http://127.0.0.1:80/PHP/Youtube-Clientes/Update.php";

    fetch(url,{
        method:"POST",
        body:form
    }).then(response=>{
        response.json().then(data => {
            Swal.fire(data.message).then(isConfirmed =>{
                if(isConfirmed){
                    window.location.href = 'index.html';
                    window.localStorage.removeItem('user');
                }
            })
        })
    })
}