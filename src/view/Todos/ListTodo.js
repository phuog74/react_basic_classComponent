import React from "react";
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';

class ListTodo extends React.Component{
    state = {
        ListTodos : [
            {id: '1', title: 'English'},
            {id: '2', title: 'Math'},
            {id: '3', title: 'Geographic'},
        ],

        editTodo :{}

    };



    addNewTodo = (todo) =>{
        //let todos = this.state.ListTodos;
        //todos.push(todo);
        this.setState({
            ListTodos : [...this.state.ListTodos, todo],
            //todos = ListTodos;
        });
        toast.success("create success !!!")
    };

    handeDeleteTodo = (todo) => {
        let currentTodo = this.state.ListTodos;
        currentTodo = currentTodo.filter(item => item.id !== todo.id);
        this.setState({
            ListTodos : currentTodo
        })
        toast.success("delete success !!!")
    }

    handeEditTodo (todo){
        let {ListTodos, editTodo} = this.state;
        let isEmpty = Object.keys(editTodo).length === 0;


        //save
        if(isEmpty === false && todo.id === editTodo.id){
            let ListTodoCopy = [...ListTodos];
           //Find index of specific object using findIndex method.    
            let objIndex = ListTodoCopy.findIndex((obj => obj.id === todo.id));

            //Update object's name property.
            ListTodoCopy[objIndex].title = editTodo.title;

            this.setState({
                ListTodos : ListTodoCopy,
                editTodo : {}
            })
            toast.success('Update Todo success !!!')
            return;
        }


        //edit
        this.setState({
            editTodo : todo
        })
        
    }
    handeChangeEditToto (event){
        let editTodoCopy = {...this.state.editTodo}
        editTodoCopy.title = event.target.value
        this.setState({
            editTodo : editTodoCopy
        })
    }

    render() {
        let { ListTodos, editTodo } = this.state;
        let isEmpty = Object.keys(editTodo).length === 0;

        // console.log('check isEmpty :', isEmpty)
        return(
            <>
          
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> 
        <div className = "list-todo-container">
            <AddTodo
            addNewTodo = {this.addNewTodo}
            />
            <div className="list-todo-content">
                {ListTodos && ListTodos.length > 0 && ListTodos.map((item, index) => {
                    return (
                        <div className="list-todo-child" key={item.id}>
                           {isEmpty === true ?
                            <span>{index + 1} - {item.title}</span>
                            
                            :
                           <>
                                {item.id === editTodo.id ?
                                <>

                                    <span>
                                        {index +1} - <input value={editTodo.title} 
                                        onChange={(event) => this.handeChangeEditToto(event)}
                                        ></input>
                                    </span>
                                </>
                                :
                                    <span>{index + 1} - {item.title}</span>
                            
                                }
                           
                           </>
                                
                           }
                            <button type="button" className="edit" 
                            onClick={() => this.handeEditTodo(item)}
                            >
                                {isEmpty === false && item.id === editTodo.id ?
                                 'Save'
                                 :
                                 'Edit'

                                }    
                                </button>
                            <button type="button" className="delete" onClick={() => this.handeDeleteTodo(item)}>Delete</button>
                         </div>
                    )
                })
                }  
            </div>
        </div>
        </>

        )
    }
}

export default ListTodo;