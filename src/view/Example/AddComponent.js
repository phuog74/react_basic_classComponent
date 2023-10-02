import React from "react";

class AddComponent extends React.Component{

    state = {
        tittle: '',
        salary: ''
    }
    handelOnChangetitle = (event) =>{
        this.setState({
            tittle: event.target.value
        })      
    }
    handelOnChangeSalary = (event) =>{
        this.setState({
            salary: event.target.value
        })
    }
    handelOnSubmit = (event) => {
        event.preventDefault()
        if(!this.state.tittle || !this.state.salary) {
            alert ('cannot be left blank')
            return;
        }
        console.log('>>>>check data input<<<<', this.state)
        let job = {
            id: Math.floor(Math.random() * 1001),
            tittle: this.state.tittle,
            salary: this.state.salary
        }
        this.props.addNewJob(
            job
        )
    }
    render() {
        return(
            <form>
                <label htmlFor="fname"> Job's tittle:</label><br/>
                 <input type="text" id = "fname"
                 value={this.state.tittle}
                 onChange={(event) => this.handelOnChangetitle(event)}
                 /><br/>
                 <label htmlFor="lname">Salary:</label><br/>
                 <input type="text" id = "lname"
                 value={this.state.salary}
                 onChange={(event) => this.handelOnChangeSalary(event)}
                 /><br/><br/>
                 <input type="submit" 
                 onClick={(event) => this.handelOnSubmit(event)}
                 />    
            </form>        
            )
    }
}

export default AddComponent;