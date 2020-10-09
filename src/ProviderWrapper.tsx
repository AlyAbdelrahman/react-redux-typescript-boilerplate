import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import translations from './i18n'
import { ThemeProvider } from "@material-ui/core/styles";
import theme from './Theme';
import { CssBaseline } from "@material-ui/core";

const language = navigator.language.split(/[-_]/)[0]; //language without region code
// const message = translations[0];

const ProviderWrapper: React.FC<any> = ({ children , store }) => (
  <IntlProvider locale={language} key="en" >
    <Provider store={store}>
      <BrowserRouter basename="/NewProject">
        <ThemeProvider theme={theme}>
            <>
            <CssBaseline/>
             {children}
            </>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </IntlProvider>
);

ProviderWrapper.prototype = {
    children: PropTypes.shape({}).isRequired,
    store: PropTypes.shape({}).isRequired
};

export default ProviderWrapper;