import React from "react";
import { toast } from 'react-toastify';

class AddTodo extends React.Component{
    state ={
        title : ''
    }

    handeOnchangeTittle = (event) => {
        this.setState ({
            title : event.target.value
        })
    }

    handeOnclickAddTodo = () =>{
        if(!this.state.title) {
            toast.error(`Missing title's Todo !`)
            return;
        }
        
        let todo = {
            id: Math.floor(Math.random() * 10000),
            title: this.state.title,
          };
        this.props.addNewTodo(todo)
        //   this.props.addNewTodo(todo);
    } 
    render(){
  
        return(
            <div className="add-todo"> 
                <input type="text" value={this.state.title}
                onChange={(event) => this.handeOnchangeTittle(event)}>
                </input>
                <button type="button" className="add"
                onClick={() => this.handeOnclickAddTodo()}>
                    Add
                </button>
            </div>
        )
    }
}

export default AddTodo;
