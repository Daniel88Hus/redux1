import React from 'react';
import {connect } from 'react-redux';
// import {fetchUser} from '../actions';


class UserHeader extends React.Component{




// didmount comment etmedeki sebep fetchPostAndUsers daki mapping

  // componentDidMount (){
  //   this.props.fetchUser(this.props.userId);

  // }
  render (){
    const {user} = this.props;

    if (!user){
      return null;
    }

    return (
      <div className='header'> {user.name}</div>
    )
  }
}

//ownProps cocmponentdidmount a gonderilen state in bir kopyasi
const mapStateToProps = (state, ownProps) => {
  return {user: state.users.find( user => user.id===ownProps.userId)};
}

// export default connect(
// mapStateToProps, 
// { fetchUser}
// )(UserHeader);

export default connect(
mapStateToProps,
)(UserHeader);