import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
// import {  toast } from 'react-toastify';

class MyComponent extends React.Component{
    state ={
       
        arrJobs : [
            {id: 'Job1', tittle : 'Develops', salary: '500'},
            {id: 'Job2', tittle : 'Testers', salary: '300'},
            {id: 'Job3', tittle : 'Project Manager', salary: '1100'}
      ]
    }
    
    addNewJob = (job) => {
        //let currentJobs = this.state.arrJobs;
        //currentJobs.push(job)
        this.setState({
            arrJobs : [...this.state.arrJobs, job]
           // arrJobs: currentJobs
            
        })
        // toast.info("okokok")
    }
    deleteJob = (job) =>{
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currentJobs
        })
    }
    render(){
        return(
            <>
            <AddComponent
            addNewJob = {this.addNewJob}
            ></AddComponent>
            
            <ChildComponent 
            arrJobs = {this.state.arrJobs}
            deleteJob = {this.deleteJob}
            ></ChildComponent>      
            </>
        )

    }
};
export default MyComponent;