import logo from "../img/logo.svg";

function Header() {
  return (
    // header component
    <div
      className=" text-20px-reg"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "45px",
      }}
    >
      {/* logo */}
      <img src={logo} alt="logotype" />

      {/* navigation + button */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "50px",
        }}
      >
        {/* navigation */}
        <nav aria-label="main-navigation">
          <ul style={{ display: "flex", flexDirection: "row", gap: "50px" }}>
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
        <button style={{ border: "1px solid #49342F" }}>Log in</button>
      </div>
    </div>
  );
}

export default Header;
