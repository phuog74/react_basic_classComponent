import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
class Home extends React.Component {

    componentDidMount(){
        // setTimeout(() => {
        //     this.props.history.push('/todo')
        // },3000)
    }


    handleDeleteUser = (users) => {
        console.log('check user delete: ',users);
        this.props.deleteUserRedux(users);
    }
    handleCreateUser = () => {
        this.props.createUserRedux();
    }
    render(){
        // console.log('check props :' , this.props.dataRedux);
        let listUser = this.props.dataRedux;
        return(
            <>
            <div>
                Hello , This's Home !
            </div>
            <div>
            {listUser && listUser.length >0 &&
            listUser.map((item, index) => {
                return(
                    
                    <div key={item.id}>
                        {index + 1} - {item.name} <span onClick={() => this.handleDeleteUser(item)}>x</span>
                    </div>
                   
                )
            })
            }
            <button onClick={() => this.handleCreateUser()}>create user</button>
            </div>

            </>
            
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        dataRedux : state.users
        }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        createUserRedux: () => dispatch({ type: 'CREATE_USER' }),
        // reset: () => dispatch({ type: 'RESET' }),
    }
}
// export default withRouter(Home);
// export default color(Home);
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
