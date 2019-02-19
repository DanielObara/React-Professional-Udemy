import { createStore } from "redux";

const initialState = {
  cards: [
    { id: 1, key: 1, name: "Carta 1", isActive: false, hasMatch: false },
    { id: 2, key: 2, name: "Carta 2", isActive: false, hasMatch: false },
    { id: 3, key: 3, name: "Carta 3", isActive: false, hasMatch: false },
    { id: 1, key: 4, name: "Carta 1", isActive: false, hasMatch: false },
    { id: 2, key: 5, name: "Carta 2", isActive: false, hasMatch: false },
    { id: 3, key: 6, name: "Carta 3", isActive: false, hasMatch: false }
  ]
};

// RECEBE O ESTADO ATUAL E A AÇÃO TOMADA
const gameReducer = (state = initialState, action) => {
  // IDENTIFICANDO QUAL A AÇÃO FOI TOMADA
  switch (action.type) {
    case "SELECT_CARD":
      //CRIA UMA CÓPIA DO ARRAY DE CARTAS POIS NÃO É UMA BOA PRATICA ALTERTARMOS OS DADOS DIRETAMENTE DA STORE
      //POIS PERDEMOS A RASTREABILIDADE/VIAGEM NO TEMPO E FERE UM DOS PRINCIPIOS DO REDUX QUE É A IMUTABILIDADE.
      const cards = state.cards.slice();

      //LOCALIZANDO O INDEX DA PRIMEIRA CARTA
      const index = cards.findIndex(c => c.key === action.key);

      //LOCALIZANDO O INDEX DA SEGUNDA CARTA E SE ESTÁ ATIVO E NÃO FOI DADO MATCH.
      const otherCardIndex = cards.findIndex(c => c.isActive && !c.hasMatch);

      //VERIFICA SE ESTA CARTA EXISTE
      if (index > -1) {
        if (cards[index].isActive) return state;
        //VERIFICA SE EXISTE OUTRA CARTA ABERTA ESPERANDO MATCH
        if (otherCardIndex > -1) {
          //VERIRIFCA SE A CARTA SELECIONADA É IGUAL A SEGUNDA CARTA
          if (cards[index].id === cards[otherCardIndex].id) {
            cards[index].isActive = true;
            cards[index].hasMatch = true;
            cards[otherCardIndex].hasMatch = true;
          } else {
            cards[otherCardIndex].isActive = false;
          }
        } else {
          cards[index].isActive = true;
        }
      }
      //IMPORTANTE PENSAR QUE O REDUCER IGNORA O ESTADO ATUAL E O ESTADO PASSA A SER INTEIRAMENTE O QUE VC RETORNAR NO REDUCER.
      //DIFERENTE DO SETSTATE QUE FAZ UM MERGE.
      return {
        ...state,
        cards
      };
    default:
      // CASO NENHUMA ENCONTRADA RETORNA O ESTADO ATUAL.
      return state;
  }
};

// Recebe como primeiro parametro o Reducer
const store = createStore(gameReducer);

export default store;
