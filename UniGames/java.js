function validardados(forms) {

    if (forms.nome.value == "") {
        alert("Nome Incompleto");
        forms.nome.focus();
        return false;
    }
    if (forms.fone.value == "") {
        alert("Telefone Incompleto");
        forms.fone.focus();
        return false;
    }
    if (forms.email.value.indexOf("@") == -1
        || forms.email.value.indexOf(".") == -1
        || forms.email.value == "") {
        alert(" Informar E-mail Válido");
        forms.email.focus();
        return false;
    }
    if (forms.endereço.value == "") {
        alert("Endereço incompleto");
        forms.endereço.focus();
        return false;
    }
    if (forms.mensagem.value == "") {
        alert("Mensagem Incompleta");
        forms.mensagem.focus();
        return false;
    }

    {
        alert("validado com sucesso")

    }

}