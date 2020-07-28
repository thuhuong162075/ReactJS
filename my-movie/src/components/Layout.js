import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import routes from './Router'

function Layout() {
  return (
        <div className="Layout">
            <Router>
                <Header />
                    <Switch>   
                        {routes.map((item, index) => (
                            <Route key={index} exact={item.exact} path={item.path} component={item.main} />
                        ))}                     
                    </Switch>
            </Router>
      </div>
  );
}

export default Layout;
