import React, { useReducer, useRef } from 'react';
import { patientReducer, patientState } from '../Reducers/PatientReducer';

const PatientManagement = () => {
    const nameRef = useRef()
    const [state, dispatch] = useReducer(patientReducer, patientState)
    const handleSubmit = event => {
        event.preventDefault()
        dispatch({
            type: 'ADD_PATIENT' , 
            name: nameRef.current.value,
            // id: state.patient.length + 1
        })
        // console.log(nameRef.current.value)
        nameRef.current.value = " "
    }
    return (
        <div>
            <h1>PatientManagement: {state.patients.length}</h1>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} />
            </form>
            {/* {
                state.patient.map (pt => <li
                     key={pt.id}
                     onClick={() => dispatch({type: 'REMOVE_PATIENT', id: pt.id })}
                     
                     >{pt.name}</li> )
            } */}
        </div>
    );
};

export default PatientManagement;