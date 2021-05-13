import * as userService from '../../utilities/users-service';

export default function OrderHistoryPage() {
  async function handleCheckToken() {
    const expDate = await userService.checkToken();
    console.log(expDate);
  }

  return (
    <>
      <h1>ORDER HISTORY</h1>
      <p>Will have more here</p>
      {/* <button onClick={handleCheckToken}>Check When My Login Expires</button> */}
    </>
  );
}