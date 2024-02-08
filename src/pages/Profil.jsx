import Accounts from '../components/Accounts';

function Profil() {
    return (<main class="main bg-dark">
                <div class="header">
                    <h1>Welcome back<br />Tony Jarvis!</h1>
                    <button class="edit-button">Edit Name</button>
                </div>
                <h2 class="sr-only">Accounts</h2>
                <Accounts accountTitle={"Checking"} accountNumber={"x8349"} accountAmount={"$2,082.79"} />
                <Accounts accountTitle={"Savings"} accountNumber={"x6712"} accountAmount={"$10,928.42"} />
                <Accounts accountTitle={"Card"} accountNumber={"x8349"} accountAmount={"$184.30"} />
            </main>);
}
export default Profil