import React from 'react';
import ExerciseRow from "./ExerciseRow";

function ExerciseList({ exercises, onDelete, onEdit }) {
    return (
        <>
            <table id="exercises">
                <caption> Exercise List Table </caption>
                {/* Table header*/}
                <thead>
                    <tr>
                        {/* Header column titles*/}
                        <th> Exercise Name </th>
                        <th> Reps </th>
                        <th> Weight </th>
                        <th> Unit </th>
                        <th> Date </th>
                        <th> Edit </th>
                        <th> Delete </th>
                    </tr>
                </thead>

                {/* Table body */}
                <tbody>
                    {/* Use Exercise Row component for each row of the table  */}
                    <ExerciseRow exercises={exercises} onDelete={onDelete} onEdit={onEdit}> </ExerciseRow>
                </tbody>
            </table>
        </>
    );
}

export default ExerciseList;
