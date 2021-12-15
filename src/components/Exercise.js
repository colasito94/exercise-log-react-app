import React from 'react';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

function Exercise({ exercise, onDelete, onEdit}) {
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
                    {/* We can access the id since the exercise variable is a Javascript object with the properties*/}

                <td> <AiOutlineEdit onClick={ () => onEdit(exercise)} /> </td>
                <td> <AiOutlineDelete onClick={ () => onDelete(exercise._id)} />  </td>
            </tr>
        </>
    );
}

export default Exercise;
