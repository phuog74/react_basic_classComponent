import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom";

class DetailUser extends React.Component{
    state ={
        user :{}
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
          try {
            let id = this.props.match.params.id;
            let res = await axios.get(`https://reqres.in/api/users/${id}`);
            console.log('<<<check data detail user >>> : ', res.data.data);
      
            this.setState({
                user:res && res.data && res.data.data ? res.data.data : {}
            });
          } catch (error) {
            console.error('Error fetching user details:', error);
          }
        }
      }
      handleBackListUser= () => {
        this.props.history.push('/user');
      }
    render(){
        let {user} = this.state;
        console.log('<<<check props >>>', this.props);
        let isEmpty = Object.keys(user).length === 0;
        return(
            <div>
                { isEmpty === false &&
                <>
                <h1>It is Detail User</h1>
                <p>id : {this.props.match.params.id}</p>
                <p>email : {user.email}</p>
                <p>name : {user.first_name} {user.last_name}</p>
                <img src={user.avatar}/>
                  <div>
                  <button type="button" onClick={() => this.handleBackListUser()}>Back</button>
                  </div>
                </>
                 }
            </div>
        )
    }
}

export default withRouter(DetailUser);
