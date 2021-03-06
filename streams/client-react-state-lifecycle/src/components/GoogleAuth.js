import React from 'react';

class GoogleAuth extends React.Component{
  state = {isSignedIn: null}

  componentDidMount(){
    window.gapi.load('client:auth2', () =>{
      window.gapi.client.init({
        clientId: '371902258336-68gep8a35k5sp8908qlfd4a83lcf9s6r.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState ({ isSignedIn: this.auth.isSignedIn.get() })
        this.auth.isSignedIn.listen(this.onAuthChange);

      })
    })
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get()})
    
  }

  onSignInClick = () => {
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut()
  }

  renderAuthButton() {
    if(this.state.isSignedIn === null) {
      return null
    } else if (this.state.isSignedIn === true) {
      return (
        <button onClick={this.onSignOutClick} className='ui black google Square button'>
          <i className='google icon'/>
          Sign Out
        </button>
      )
    } else {
      return <button onClick={this.onSignInClick} className='ui black google Square button'>
      <i className='google icon'/>
      Sign In
    </button>
    }
  }

  render (){
    return (
      <div>{this.renderAuthButton()}</div>
    )
  }
}

export default GoogleAuth;