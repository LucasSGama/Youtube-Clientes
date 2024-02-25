ShowData();
function ShowData() {
    const url = 'http://127.0.0.1:80/PHP/Youtube-Clientes/read.php';

    fetch(url,{
        method:"GET"
    }).then(response => response.text())
    .then(response => results.innerHTML=response)
    .catch(err => console.log(err))
}