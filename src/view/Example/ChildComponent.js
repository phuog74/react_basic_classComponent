import React from "react";

class ChildComponent extends React.Component{
    state = {
        Showjob : false
    
    }
    handleShowHide = (status) => {
        this.setState ({
            Showjob : !this.state.Showjob
        })
    }    
    handleOnClickDelete = (job) => {
        this.props.deleteJob(job)
        
    }    
    
    render(){
        let {arrJobs} = this.props;
        let { Showjob } = this.state;
        return(
            <>
            { Showjob === false ? 
            <div><button onClick={ () => this.handleShowHide()}>Show</button></div>
            :
            <>
            <div className="job-lists">
                {
                    arrJobs.map((item, index) =>{
                        
                        return(
                            <div key={item.id}>
                                {item.tittle} - {item.salary} $ <></> <span onClick={() => this.handleOnClickDelete(item)}>x</span>
                            </div>
                        )
                        
                    })
                }
            </div>
            <div><button onClick={() => this.handleShowHide()}>Hide</button></div>
            </>
    }
            </>
        )

    }
};
export default ChildComponent;