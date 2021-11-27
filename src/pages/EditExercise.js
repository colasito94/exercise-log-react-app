import React from 'react';
import { Link } from "react-router-dom";

function EditExercise() {
    return (
        <>
            <h1>EditExercise Page </h1>

            {/* Link to Home Page */}
            <Link class="link" to="/"> Go to Home Page </Link>
        </>
    );
}

export default EditExercise;
