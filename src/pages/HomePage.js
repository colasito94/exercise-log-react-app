import React, { useEffect, useState } from 'react';
import ExerciseTable from '../components/ExerciseTable'
import {Link, useNavigate} from "react-router-dom";

function HomePage( { setExerciseToEdit } ) {
    // Displays all exercises in the Home Page
    const [exercises, setExercises] = useState([]);  // useState adds React state to components

    const navigate = useNavigate();

    // Delete function
    const onDelete = async _id => {
        const response = await fetch(`/exercises/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetch('/exercises');
            const exercises = await getResponse.json();
            setExercises(exercises);
        } else {
            console.error(`Failed to delete exercise with id = ${_id}, status code = ${response.status}`)
        }
    }

    // Update function
    const onEdit = async exerciseToEdit => {
        setExerciseToEdit(exerciseToEdit);
        navigate("/EditExercise");
    }

    // Read/retrieve function
    const loadExercises = async () => {
        const response = await fetch('/exercises'); // fetch API calls endpoint /exercises; uses default GET method since method not specified


        const exercises_data = await response.json();
        setExercises(exercises_data);
    }

    useEffect(() => {
        loadExercises();  // Will only be called once in the lifecycle
    }, []);

    return (
        <>
            <h1>Sean's Exercise App</h1>
            <h2>Welcome to Sean's Exercise App.</h2>

            <ExerciseTable exercises={exercises}
                           onDelete={onDelete}
                           onEdit={onEdit}>
            </ExerciseTable>

            <Link class="link" to="/CreateExercise"> CreateExercise Page </Link>
        </>
    );
}

export default HomePage;
