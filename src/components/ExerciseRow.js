import React from 'react';

import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai";

function ExerciseRow({ exercise, onDelete, onEdit }) {
    return (
        <>
            {/*Creates one Exercise component for each exercise entry
            in the provided array (GET request /exercise from REST API server)
            item parameter corresponds to an item value in the array
            i parameter corresponds to the index of the item value in the array
            RETURNS AN ARRAY OF ALL THE EXERCISES
            */}
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

export default ExerciseRow;
