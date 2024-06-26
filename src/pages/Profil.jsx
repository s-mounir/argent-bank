import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Accounts from '../components/Accounts';
import { useGetUserDetailsQuery } from '../utils/authService';
import { setCredentials } from '../utils/authSlice';
import EditName from '../components/EditName';

function Profil() {
    const { userFirstName, userLastName } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    console.log(userFirstName,' : ', userLastName)

    // automatically authenticate user if token is found
    const { data, isFetching } = useGetUserDetailsQuery('userDetails', {
        //perform a refetch every 15mins
        pollingInterval: 900000,
    });

    useEffect(() => {
        if (data) dispatch(setCredentials(data))
    }, [data, dispatch])

    return (<main className="main bg-dark">
        <div className="header">
            <EditName />
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Accounts accountTitle={"Checking"} accountNumber={"x8349"} accountAmount={"$2,082.79"} />
        <Accounts accountTitle={"Savings"} accountNumber={"x6712"} accountAmount={"$10,928.42"} />
        <Accounts accountTitle={"Card"} accountNumber={"x8349"} accountAmount={"$184.30"} />
    </main>);
}
export default Profil