function Validation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if (values.name === "") {
        error.name = "Nome não deve ser vazio"
    } else {
        error.name = ""
    }

    if (values.email === "") {
        error.email = "Email não pode ser vazio"
    } else if (!email_pattern.test(values.email)) {
        error.email = "Email fora do padrao"
    } else {
        error.email = ""
    }

    if (values.password === "") {
        error.password = "Senha nao pode ser vazia"
    } else if (!password_pattern.test(values.password)) {
        error.password = "Senha fora do padrao"
    } else {
        error.password = ""
    }

    return error;
}

export default Validation;