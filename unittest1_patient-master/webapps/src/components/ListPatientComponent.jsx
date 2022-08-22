import React, { Component } from 'react'
import patientService from '../services/patientService'

class ListPatientComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                patients: []
        }
        this.addpatient = this.addpatient.bind(this);
        this.editpatient = this.editpatient.bind(this);
        this.deletepatient = this.deletepatient.bind(this);
    }

    deletepatient(id){
        patientService.deletepatient(id).then( res => {
            this.setState({patients: this.state.patients.filter(patient => patient.id !== id)});
        });
    }
    viewpatient(id){
        this.props.history.push(`/view-patient/${id}`);
    }
    editpatient(id){
        this.props.history.push(`/add-patient/${id}`);
    }

    componentDidMount(){
        patientService.getpatients().then((res) => {
            this.setState({ patients: res.data});
        });
    }

    addpatient(){
        this.props.history.push('/add-patient/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">patients List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addpatient}> Add patient</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> patient First Name</th>
                                    <th> patient Last Name</th>
                                    <th> patient Email Id</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.patients.map(
                                        patient => 
                                        <tr key = {patient.id}>
                                             <td> { patient.firstName} </td>   
                                             <td> {patient.lastName}</td>
                                             <td> {patient.emailId}</td>
                                             <td>
                                                 <button onClick={ () => this.editpatient(patient.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deletepatient(patient.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewpatient(patient.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListPatientComponent
