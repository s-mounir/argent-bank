import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { updateCredentials } from "../utils/authSlice";

function EditName() {
    const { userToken, userFirstName, userLastName } = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    const [display, setDisplay] = useState(true);
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();

    function handleDisplay() {
        setDisplay(false);
        setFirstName(userFirstName);
        setLastName(userLastName);
    }

    async function handleSubmitUsername(event) {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userToken}`,
                },
                body: JSON.stringify({firstName,lastName}),
            });
            if (response.ok) {
                const data = await response.json();
                /* Checking that the query response is indeed retrieved */
                console.log(data) 
                console.log('firstname : ',firstName)
                dispatch(updateCredentials(data))
                setDisplay(true);
            } else {
                console.log("Invalid Fields")
            }

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <h1>Welcome back<br /> {userFirstName} {userLastName}</h1>
            {display ?
                <button className="edit-button" onClick={handleDisplay}>
                    Edit Name
                </button>
                :
                <form>
                    <div>
                        <input
                            type="text"
                            name="firstname"
                            defaultValue={firstName}
                            onChange={(event) => setFirstName(event.target.value)}
                        />
                        <input
                            type="text"
                            name="lastname"
                            defaultValue={lastName}
                            onChange={(event) => setLastName(event.target.value)}
                        />
                    </div>
                    <div>
                        <button className="edit-button" onClick={handleSubmitUsername}>Save</button>
                        <button className="edit-button" onClick={() => setDisplay(true)}>Cancel</button>
                    </div>
                </form>}
        </div>

    );
}
export default EditName