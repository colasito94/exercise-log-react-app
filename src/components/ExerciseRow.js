import React from 'react';
import Exercise from './Exercise';

function ExerciseRow({ exercises, onDelete, onEdit }) {
    return (
        <>
            {/*Creates one Exercise component for each exercise entry
            in the provided array (GET request /exercise from REST API server)
            item parameter corresponds to an item value in the array
            i parameter corresponds to the index of the item value in the array
            RETURNS AN ARRAY OF ALL THE EXERCISES
            */}
            {exercises.map((exercise, i) => <Exercise exercise={exercise}
                                                      key={i}
                                                      onDelete={onDelete}
                                                      onEdit={onEdit}
                                                      />)}
        </>
    );
}

export default ExerciseRow;
