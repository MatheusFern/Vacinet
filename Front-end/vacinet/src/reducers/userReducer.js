const initialState = {

  email: '',
  senha: ''
};

export default (state = initialState, action) => {
  switch (action.type) {

    case 'SET_EMAIL':
      return { ...state, email: action.payload.email };
      break;
    case 'SET_SENHA':
      return { ...state, senha: action.payload.senha };
      break;
  }

  return state;
}
