import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom";

class ListUser extends React.Component {

    state = {
        listUser: []
    }

    handleViewDetailUser = (user) => {
        // console.log('data', this.props);
        this.props.history.push(`/user/${user.id}`);

    }
    async componentDidMount() {
        let res = await axios.get("https://reqres.in/api/users?page=2");
        console.log(res.data.data);

        this.setState({
            listUser: res && res.data && res.data.data ? res.data.data : []

        })
    }
    render() {
        let { listUser } = this.state;
        return ( 
        <div>
            <div>
            List Users 
            </div> 
            <div> {
                listUser && listUser.length > 0 && listUser.map((item, index) => {
                    return ( 
                        <div key = { item.id }
                        onClick = {
                            () => this.handleViewDetailUser(item) } >
                        { index + 1 } - { item.first_name } - { item.last_name } 
                        </div> 
                    )
                })
            }

            </div> 
            </div>
        )
    }
}


export default withRouter(ListUser);