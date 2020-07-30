import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import routes from './Router'
import Footer from './Footer';

function Layout() {
  return (
        <div className="Layout">
            <Router>
                <Header />
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>   
                            {routes.map((item, index) => (
                                <Route key={index} exact={item.exact} path={item.path} component={item.main} />
                            ))}                     
                        </Switch>
                    </Suspense>
                <Footer/>
            </Router>
      </div>
  );
}

export default Layout;
