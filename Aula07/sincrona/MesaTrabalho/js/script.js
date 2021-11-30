const handleInsert = () => {
    // Pegando elemento form
    const form = document.getElementById("insert-form");

    // a árvore dos elementos/nós do documento HTML e o DOM

    // Um título com o texto: “Login”.
    const title = document.createElement("h1");
    title.innerText = "Login";
    form.appendChild(title);

    // Um campo de input text com um placeholder: “Email”.
    const inputEmail = document.createElement("input");
    inputEmail.setAttribute('type', 'email');
    inputEmail.setAttribute("placeholder", "Email");
    form.appendChild(inputEmail);

    // Um campo de input password com um placeholder: “Senha”.
    const inputPassword = document.createElement("input");
    inputPassword.setAttribute('type', 'password');
    inputPassword.setAttribute("placeholder", "Senha");
    form.appendChild(inputPassword);

    // Um botão submit com o texto “Enviar”.
    const buttonSubmit = document.createElement("button");
    buttonSubmit.setAttribute("type", "submit");
    buttonSubmit.innerText = "Enviar";
    form.appendChild(buttonSubmit);

    // Um botão submit com o texto “Enviar”.
    const buttonCancel = document.createElement("button");
    buttonCancel.setAttribute("type", "cancel");
    buttonCancel.innerText = "Cancelar";
    form.appendChild(buttonCancel);

    // Insira o atributo disabled no campo de Email.
    inputEmail.setAttribute("disabled", true);

    // Insira um estilo da sua escolha, a sugestão seria o display flex com flex-direction column
    form.style.display = "flex";
    form.style.flexDirection = "column";
    form.style.gap = "16px";
    form.style.maxWidth = "640px";
    form.style.margin = "0 auto";

    // Remova o atributo placeholder do email.
    inputEmail.removeAttribute("placeholder");

    document.body.appendChild(form);
};