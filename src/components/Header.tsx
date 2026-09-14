import logo from "../img/logo.svg";
import { css, cx } from "@emotion/css";

const header_conteiner = css({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "45px",
});

const h_content = css({
  display: "flex",
  flexDirection: "row",
  gap: "50px",

  "& ul": {
    display: "flex",
    flexDirection: "row",
    gap: "50px",
  },
});

function Header() {
  return (
    // header component
    <div className={cx(header_conteiner, "text-20px-reg")}>
      {/* logo */}
      <img src={logo} alt="logotype" />

      {/* navigation + button */}
      <div className={h_content}>
        {/* navigation */}
        <nav aria-label="main-navigation">
          <ul>
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Howitworks">How it works</a>
            </li>
            <li>
              <a href="#Memberstories">Member stories</a>
            </li>
            <li>
              <a href="#Events">Events</a>
            </li>
          </ul>
        </nav>

        {/* button */}
        <button className="color-border">Log in</button>
      </div>
    </div>
  );
}

export default Header;
