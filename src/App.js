import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import store from './redux/store';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';
import SignUp from './components/SignUp/SignUp';

const preloaderStyle = {
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return (
        <div style={preloaderStyle}>
          <Preloader />
        </div>
      )
    }

    return (
      <>
        <Header />
        <Route path="/signup" render={() => <SignUp />} />
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(withRouter, 
  connect(mapStateToProps, { initializeApp }))(App);

const MainApp = props => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}



export default MainApp;
