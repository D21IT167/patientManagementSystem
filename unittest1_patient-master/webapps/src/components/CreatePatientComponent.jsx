import React, { Component } from 'react'
import PatientService from '../services/PatientService';

class CreatePatientComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            PatientService.getPatientById(this.state.id).then( (res) =>{
                let patient = res.data;
                this.setState({name: patient.name,
                    age: patient.age,
                    address : patient.address
                });
            });
        }        
    }
    saveOrUpdatePatient = (e) => {
        e.preventDefault();
        let patient = {name: this.state.name, age: this.state.age, address: this.state.address};
        console.log('employee => ' + JSON.stringify(patient));

        // step 5
        if(this.state.id === '_add'){
            PatientService.createPatient(patient).then(res =>{
                this.props.history.push('/patients');
            });
        }else{
            PatientService.updateEmployee(patient, this.state.id).then( res => {
                this.props.history.push('/patients');
            });
        }
    }
    
    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeAgeHandler= (event) => {
        this.setState({age: event.target.value});
    }

    changeAddressHandler= (event) => {
        this.setState({address: event.target.value});
    }

    cancel(){
        this.props.history.push('/patients');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Patient</h3>
        }else{
            return <h3 className="text-center">Update Patient</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label>  Name: </label>
                                            <input placeholder="Name" name="firstName" className="form-control"
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Age: </label>
                                            <input placeholder="Age" name="lastName" className="form-control"
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Address: </label>
                                            <input placeholder="Address" name="emailId" className="form-control"
                                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreatePatientComponent
