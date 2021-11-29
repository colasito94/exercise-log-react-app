import React, {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";

function EditExercise( { exerciseToEdit } ) {
    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [date, setDate] = useState(exerciseToEdit.date);

    const navigate = useNavigate();

    const editExercise = async () => {
        const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ name: name, reps: reps, weight: weight,
                unit: unit, date: date}),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 200){
            alert("Successfully edited the exercise!");
        } else {
            alert(`Failed to edit exercise, status code = ${response.status}`);
        }
    };

    return (
        <>
            <h1>EditExercise Page </h1>

            {/*Exercise Form*/}
            <form>
                <fieldset>
                    <legend> Edit your exercise! </legend>
                    <label>Exercise Name:
                        <input type="text"
                               placeholder={name}
                               value={name}
                               onChange={e => setName(e.target.value)} />
                    </label><br/>
                    <label>Reps:
                        <input type="number"
                               placeholder={reps}
                               value={reps}
                               onChange={e => setReps(e.target.value)} />
                    </label><br/>
                    <label>Weight:
                        <input type="number"
                               placeholder={weight}
                               value={weight}
                               onChange={e => setWeight(e.target.value)} />
                    </label><br/>
                    <label>Unit:
                        <input type="text"
                               placeholder={unit}
                               value={unit}
                               onChange={e => setUnit(e.target.value)} />
                    </label><br/>
                    <label>Date:
                        <input type="text"
                               placeholder={date}
                               value={date}
                               onChange={e => setDate(e.target.value)}/>
                    </label><br/>

                    {/*Submit button with event handler*/}
                    <button
                        // Event handler that calls editExercise()
                        onClick={ () => {
                            editExercise();  {/*Call state update function*/}
                            navigate('/');
                        }}>
                        Save
                    </button>
                </fieldset>
            </form>

            {/* Link to Home Page */}
            <Link class="link" to="/"> Go to Home Page </Link>
        </>
    );
}

export default EditExercise;
