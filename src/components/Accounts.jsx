function Accounts(props) {
    const accountTitle = props.accountTitle;
    const accountNumber = props.accountNumber;
    const accountAmount = props.accountAmount;
    

    return (
            <section class="account">
              <div class="account-content-wrapper">
                <h3 class="account-title">Argent Bank {accountTitle} ({accountNumber})</h3>
                <p class="account-amount">{accountAmount}</p>
                <p class="account-amount-description">Available Balance</p>
              </div>
              <div class="account-content-wrapper cta">
                <button class="transaction-button">View transactions</button>
              </div>
            </section>
    );
}
export default Accounts