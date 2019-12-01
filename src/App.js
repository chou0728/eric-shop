import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header-component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    // create observer to watch authstate change
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAth => {
      if(userAth) {
        const userRef = await createUserProfileDocument(userAth)
        userRef.onSnapshot(snapshot => { // watch snapshop event (when shapshot create)
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data() // use .data() to get the data in firestore
            }
          })
        })
      } else {
        this.setState({currentUser: userAth}) // if userAth is null then set currentUser to null
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
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
