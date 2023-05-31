import Menu from "./Menu";
import "../../styles/pages/profile.scss";

function Profile({ btnState, handleClick }) {
  return (
    <>
      <div className="profile">
        <Menu btnState={btnState} handleClick={handleClick}></Menu>
        <section className="profile__section"></section>
      </div>
      {/* <Footer></Footer> */}
    </>
  );
}

export default Profile;
