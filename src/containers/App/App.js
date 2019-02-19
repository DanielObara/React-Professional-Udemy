import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../Routes";

// LIMPA AS CONFIGURAÇÕES DE CSS PADRÃO
import CssBaseline from "@material-ui/core/CssBaseline";

// IMPORTAMOS O PROVIDER COMO REDUXPROVIDER PARA MELHOR DISTINÇÃO CASO HOUVER MAIS DE UM PROVIDER
import { Provider as ReduxProvider } from "react-redux";

import store from "../../store";

const App = () => (
  // NÃO PODEMOS TER MAIS DE UM COMPONENTE NÓ RAIZ PRECISAMOS USAR O FRAGMENT.
  // NO ES7 é POSSÍVEL USAR O FRAGMENT APENAS COM '<> e </>'

  //Este é provedor da store do redux passando para os componentes abaixo.
  <ReduxProvider store={store}>
    <>
      <CssBaseline />
      <Router>
        <div>
          <Routes />
        </div>
      </Router>
    </>
  </ReduxProvider>
);

export default App;
