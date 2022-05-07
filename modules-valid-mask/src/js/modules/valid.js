const validar = {
    cpf(value, controlador = 9) {
      let verificadorMomento = [];
      let auxiliar = [];
      let produtoEntreArrays = [];
      let somatorioDosProdutos = 0;
      let restoDaDivisao;
      let result = 0;
  
      function capturarNumero(value) {
        for (let i = 0; i < controlador; i++)
          verificadorMomento[i] = value.substring(i, i + 1);
      }

      function atribuirValoresAoAuxiliar() {
        if (controlador == 9)
          for (let i = 10, index = 0; index <= controlador - 1; i--, index++) {
            auxiliar[index] = i;
          }
        else if (controlador == 10) {
          for (let i = 11, index = 0; index <= controlador - 1; i--, index++) {
            auxiliar[index] = i;
          }
        }
      }

      function operacoesComOsArrays() {
        for (let i = 0; i <= controlador - 1; i++) {
          produtoEntreArrays[i] = verificadorMomento[i] * auxiliar[i];
          somatorioDosProdutos += produtoEntreArrays[i];
        }
      }
  
      function verificarIgualdadeDoDigitoVerificador() {
        restoDaDivisao = (somatorioDosProdutos *= 10) % 11;
  
        if (restoDaDivisao == 10 || restoDaDivisao == 11) restoDaDivisao = 0;

        if (controlador === 9) {
          if (restoDaDivisao == value.substring(9, 10)) {
            result = validar.cpf(value, 10);
          } else {
            result = -1;
          }
        }
  
        else if (controlador === 10) {
          if (restoDaDivisao != value.substring(10, 11))
            result = -1;
        }
      }

      if (!(value === "")) {
        capturarNumero(value);
        atribuirValoresAoAuxiliar();
        operacoesComOsArrays();
        verificarIgualdadeDoDigitoVerificador();
      } else {
        result = -1;
      }
  
      return result;
    },
  
    date(date) {
      const today = new Date();
      date = date.split("/");
  
      const day = Number(date[0]);
      const month = Number(date[1]);
      const year = Number(date[2]);
  
      if (year === today.getFullYear()) {
        if (month <= (today.getMonth() + 1)) {
          if (day <= today.getDate()) {
            return 0;
          }
        }
      }
  
        if (year < today.getFullYear()) {
          if ((month <= 12 )) {
            if (day <= 31) {
              return 0;
            }
          }
        } 
        return -1;
    },
  
    email(value) {
      if (!(value.includes("@") && value.includes("."))) return -1;
    },
  
    fone(value) {
      if (value < 8) return -1;
    },
};
  
export default validar;