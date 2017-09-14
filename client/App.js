// @flow

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';

import resume from 'assets/resume.json';

import Main from 'components/Main';
import RootTheme from 'components/RootTheme';

const getVariants = (resume: Object): Array<string> => {
  return Object.keys(resume.variants);
};

class App extends Component {
  render() {
    return (
      <RootTheme>
        <BrowserRouter>
          <Switch>
            {getVariants(resume).map(variant => {
              return (
                <Route
                  key={variant}
                  path={`/${variant}`}
                  exact
                  component={Main}
                />
              );
            })}
            <Route path={'/'} exact component={Main} />
            <Redirect to={'/'} />
          </Switch>
        </BrowserRouter>
      </RootTheme>
    );
  }
}

export default App;
