import React, {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";

function CreateExercise() {
    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('');
    const [date, setDate] = useState('');

    const navigate = useNavigate();

    // Create function
    const addExercise = async () => {
        const newExercise = { name, reps, weight, unit, date };
        const response = await fetch('/exercises', {
            method: 'POST', // Call /exercises and POST endpoints
            body: JSON.stringify(newExercise), // Converts Javascript Object to a JSON string
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert("Successfully added the exercise!");
        } else {
            alert(`Failed to add movie, status code = ${response.status}`);
        }
    };

    return (
        <>
            <h1>CreateExercise Page </h1>

            {/*Exercise Form*/}
            <form>
                <fieldset>
                    <legend> Track your exercise! </legend>
                    <label>Exercise Name:
                        <input type="text"
                               value={name}
                               onChange={e => setName(e.target.value)} />
                    </label><br/>
                    <label>Reps:
                        <input type="number"
                               value={reps}
                               onChange={e => setReps(e.target.value)} />
                    </label><br/>
                    <label>Weight:
                        <input type="number"
                               value={weight}
                               onChange={e => setWeight(e.target.value)} />
                    </label><br/>
                    <label>Unit:
                        <input type="text"
                               value={unit}
                               onChange={e => setUnit(e.target.value)} />
                    </label><br/>
                    <label>Date:
                        <input type="text"
                               value={date}
                               onChange={e => setDate(e.target.value)}/>
                    </label><br/>

                    {/*Submit button with event handler*/}
                    <button
                        // Event handler that calls addExercise()
                        onClick={ () => {
                            addExercise();  {/*Call state update function*/}
                            navigate("/");
                        }}>
                        Submit
                    </button>
                </fieldset>
            </form>

            {/* Link to Home Page */}
            <Link class="link" to="/"> Go to Home Page </Link>
        </>
    );
}

export default CreateExercise;
