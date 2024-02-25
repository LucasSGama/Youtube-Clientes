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