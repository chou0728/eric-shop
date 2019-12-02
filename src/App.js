import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header-component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props

    // create observer to watch authstate change
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAth => {
      if(userAth) {
        const userRef = await createUserProfileDocument(userAth)
        userRef.onSnapshot(snapshot => { // watch snapshop event (when shapshot create)
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data() // use .data() to get the data in firestore
          })
        })
      } else {
        setCurrentUser({userAth})  // if userAth is null then set currentUser to null
      }
    });
  }

  componentWillUnmount() {
    // remove observer
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
