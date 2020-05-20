const initialState = {
  saudeP: '',
  SaudeAR: '',
  SaudeGS: '',
  Saudepeso: '',
  SaudeMED: ''
  
};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SAUDEP':
      return { ...state, saudeP: action.payload.saudeP };
      break;
    case 'SET_SAUDEAR':
      return { ...state, SaudeAR: action.payload.SaudeAR };
      break;
    case 'SET_SAUDEGS':
      return { ...state, SaudeGS: action.payload.SaudeGS };
      break;
    
    case 'SET_SAUDEMED':
      return { ...state, SaudeMED: action.payload.SaudeMED };
      break;
    
  }

  return state;
}
