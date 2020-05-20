const initialState = {
  nome: '',
  cpf: '',
  data: '',
  telefone: '',
  email: '',
  senha:''
};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NOME':
      return { ...state, nome: action.payload.nome };
      break;
    case 'SET_CPF':
      return { ...state, cpf: action.payload.cpf };
      break;
    case 'SET_DATA':
      return { ...state, data: action.payload.data };
      break;
    case 'SET_TELEFONE':
      return { ...state, telefone: action.payload.telefone };
      break;
    case 'SET_EMAIL':
      return { ...state, email: action.payload.email };
      break;
    case 'SET_SENHA':
      return { ...state, senha: action.payload.senha };
      break;
  }

  return state;
}
