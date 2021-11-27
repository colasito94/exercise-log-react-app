import React, {useState} from 'react';
import {Link} from "react-router-dom";

function CreateExercise() {
    const [name, setName] = useState('');
    const [reps, setYear] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('');
    const [date, setDate] = useState('');

    const addExercise = async () => {
        const newExercise = { name, reps, weight, unit, date };
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert("Successfully added the movie!");
        } else {
            alert(`Failed to add movie, status code = ${response.status}`);
        }
    };

    return (
        <>
            <h1>CreateExercise Page </h1>

            {/* Link to Home Page */}
            <Link class="link" to="/"> Go to Home Page </Link>
        </>
    );
}

export default CreateExercise;
