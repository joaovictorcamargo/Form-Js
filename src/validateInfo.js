export default function validateInfo(values) {
    let errors = {}

    if(!values.Name.trim()) {
        errors.Name = "Digite o nome"
    }

    //Email
    if(!values.email) {
        errors.email = "Digite o email"
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email invalido"
    }

    if(!values.CNPJ) {
        errors.CNPJ = "Digite o CNPJ"
    }else if (values.CNPJ.length < 14) {
        errors.CNPJ = 'CNPJ deve ter 14 dígitos ou mais'
    }

    if(!values.CNPJ2) {
        errors.CNPJ2 = 'Comfirme o CNPJ'
    }else if (values.CNPJ2 !== values.CNPJ) {
        errors.CNPJ2 = 'Digite o mesmo CNPJ'
    }

    return errors;
}