import decoration from "../img/card1-image.svg";

function Card1Home() {
  return (
    // Card1Home
    <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
      {/* main card */}
      <div
        className=" color-yellow"
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "122px 88px 70px 73px",
          borderRadius: "40px",
          justifyContent: "space-between",
        }}
      >
        {/* left content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <h1 className=" text-64px-reg">
            <span className=" text-64px-exbold-italic">Level Up</span> with{" "}
            <br />
            Curated Mastermind <br /> Circle
          </h1>

          <h2 className=" text-22px-reg">
            Alliatus connects ambitious people into small, <br /> handpicked
            groups for honest feedback, strategy <br /> sessions, and real
            accountability.
          </h2>

          {/* buttons */}
          <div
            className=" text-20px-reg"
            style={{ display: "flex", flexDirection: "row", gap: "20px" }}
          >
            <button className="color-grey">Apply Now</button>
            <button style={{ border: "1px solid #303030" }}>
              Learn How It Works
            </button>
          </div>

          <h3 className=" text-16px-reg-italic">
            <span className=" text-16px-semibold">4.9★ average rating</span>
            <br />
            Feedback from real members across sessions.
          </h3>
        </div>

        {/* right content */}
        <img src={decoration} alt="decotration" />
      </div>

      {/* bottom card */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
          padding: "24px",
          gap: "80px",
          border: "1px solid #303030",
          borderRadius: "24px",
        }}
      >
        <div style={{ width: "188px" }}>
          <h2 style={{ marginBottom: "8px" }} className=" text-40px-exbold">
            82%
          </h2>
          <h3 className=" text-16px-reg">
            of members say they gained clarity within the first 2 sessions
          </h3>
        </div>

        <div style={{ width: "188px" }}>
          <h2 style={{ marginBottom: "8px" }} className=" text-40px-exbold">
            93%
          </h2>
          <h3 className=" text-16px-reg">report feeling more accountable </h3>
        </div>
        <div style={{ width: "188px" }}>
          <h2 style={{ marginBottom: "8px" }} className=" text-40px-exbold">
            6
          </h2>
          <h3 className=" text-16px-reg">
            6-person circles. The sweet spot for focused, diverse conversations.
          </h3>
        </div>
        <div style={{ width: "188px" }}>
          <h2 style={{ marginBottom: "8px" }} className=" text-40px-exbold">
            1,200+
          </h2>
          <h3 className=" text-16px-reg">
            hours of mastermind sessions hosted
          </h3>
        </div>
        <div style={{ width: "188px" }}>
          <h2 style={{ marginBottom: "8px" }} className=" text-40px-exbold">
            75%
          </h2>
          <h3 className=" text-16px-reg">return for a second cycle </h3>
        </div>
      </div>
    </div>
  );
}

export default Card1Home;
