import React from 'react';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import {Link} from "react-router-dom";

function Exercise({ exercise, onDelete }) {
    // Receives item parameter which is a JSON object corresponding to an element of the
    // array in data/items.js
    return (
        <>
            <tr>
                <td> {exercise.name} </td>
                <td> {exercise.reps} </td>
                <td> {exercise.weight} </td>
                <td> {exercise.unit} </td>
                <td> {exercise.date} </td>
                <Link class="link" to="/EditExercise">
                    <AiOutlineEdit />
                </Link>
                <td> <AiOutlineDelete onClick={ () => onDelete(exercise._id)} />  </td>
            </tr>
        </>
    );
}

export default Exercise;
