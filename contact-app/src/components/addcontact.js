import React from "react";

class Addcontact extends React.Component {
    state = {
        Name:"",
        Email:"",
    };
    add = (e) => {
        e.preventDefault();
        if(this.state.Name === "" || this.state.Email === ""){
            alert("All the fields are mandatory!");
            return;
        }
        this.props.addcontactHandler(this.state);
        this.setState({Name:"",Email:""});
       

    };
    render(){
        return(
            <div className = "ui main">
                <h2>Add Contact</h2>
                <form className = "ui form" onSubmit={this.add}>
                    <div className = "field">
                        <label> Name</label>
                        <input type = "text" Name ="name" placeholder ="Name"
                        value = {this.state.Name}
                        onChange={ (e) =>this.setState({Name:e.target.value}) } />
                    </div>
                    <div className = "field">
                        <label> Email </label>
                        <input type = "text" Name ="Email" placeholder ="Email" 
                        value = {this.state.Email}
                        onChange={ (e) =>this.setState({Email:e.target.value}) } />
                    </div>
                    <button className="ui button blue"> Add </button>
                </form>
            </div>

        );
    }
    


}

export default Addcontact;