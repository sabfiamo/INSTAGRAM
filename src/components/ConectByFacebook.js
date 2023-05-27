import "../styles/layout/conectByFacebook.scss";
function ConectByFacebook({ fromRegister }) {
  return (
    <section
      className={
        "facebook__container " + (fromRegister ? "facebook__orderReverse" : "")
      }
    >
      <a
        className={"facebook__button " + (fromRegister ? "colorReverse" : "")}
        href="https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26state%3D%257B%2522fbLoginKey%2522%253A%2522heb0rq1pdwz0b15gjlla5scvti1nbk8ucabpm7n1tpuj3maaiv37%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%26scope%3Demail%26response_type%3Dcode%252Cgranted_scopes%26locale%3Des_ES%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Db5b5dd1e-5c3d-4ecd-b602-98adad9b5335%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%2522heb0rq1pdwz0b15gjlla5scvti1nbk8ucabpm7n1tpuj3maaiv37%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%23_%3D_&display=page&locale=es_ES&pl_dbl=0"
      >
        <i
          className={
            "fa-brands fa-square-facebook facebook__icon " +
            (fromRegister ? "colorReverse" : "")
          }
        ></i>{" "}
        Iniciar sesión con Facebook
      </a>
      <div className="facebook__line--container">
        <span className="facebook__line"></span>
        <span className="facebook__o">O</span>
        <span className="facebook__line"></span>
      </div>
    </section>
  );
}

export default ConectByFacebook;
