import React, { Component } from 'react'
import patientService from '../services/patientService'

class ViewPatientComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            patient: {}
        }
    }

    componentDidMount(){
        patientService.getpatientById(this.state.id).then( res => {
            this.setState({patient: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View patient Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> patient First Name: </label>
                            <div> { this.state.patient.name }</div>
                        </div>
                        <div className = "row">
                            <label> patient Last Name: </label>
                            <div> { this.state.patient.age }</div>
                        </div>
                        <div className = "row">
                            <label> patient Email ID: </label>
                            <div> { this.state.patient.address }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewPatientComponent
