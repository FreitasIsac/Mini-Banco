let user = prompt("Digite seu Usuário:")
let password = Number(prompt("Digite sua Senha"))

let userADM = "admin"
let passwordADM = 150425

if(user == userADM && password == passwordADM) {
    alert("Logado com sucesso!")
    menu()

    function menu(){
        let opcoes = Number(prompt(`
         [1]Ver saldo   
         [2]Realizar saque  
         [3]Realizar depósito   
         [4]Transferência para outro usuário   
         [5]Ver dados da conta   
         [6]Alterar senha   
         [7]Sair.
    `))
    
    return opcoes
}
} else {
    alert("Usuário ou senha incorreta")

}