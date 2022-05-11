const Mascara = {

    //CPF
    cpf(value){
        return value
        .replace(/\D/g,'')
        .replace(/(\d{3})(\d)/,'$1.$2')
        .replace(/(\d{3})(\d)/,'$1.$2')
        .replace(/(\d{3})(\d{1,2})/,'$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1')
        },
                          
    //DATE
    date(value){
        return value
        .replace(/\D/g,'')
        .replace(/(\d{2})(\d)/,'$1/$2')
        .replace(/(\d{2})(\d)/,'$1/$2')
        .replace(/(\d{4})\d+?$/, '$1')
        },
                    
    //FONE
    fone(value){
        return value
        .replace(/\D/g,'')
        .replace(/(\d{2})(\d)/,'($1)$2')
        .replace(/(\d{4})(\d)/,'$1-$2')
        .replace(/(\d{4})-(\d)(\d{4})/,'$1$2-$3')
        .replace(/(-\d{4})\d+?$/, '$1')
        },
                    
    //CEP
    cep(value){
        return value
        .replace(/\D/g,'')
        .replace(/(\d{5})(\d)/,'$1-$2')
        .replace(/(-\d{3})\d+?$/, '$1')
        }
};
  
export default Mascara;

