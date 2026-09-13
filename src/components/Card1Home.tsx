import decoration from "../img/card1-image.svg";

function Card1Home() {
  return (
    // Card1Home
    <>
      <style>{`
        .c1-body{
            display: flex;
            flex-direction: column;
            gap: 40px;
        }

        .c1-main-card {
            display: flex;
            flex-direction: row;
            padding: 122px 88px 70px 73px;
            border-radius: 40px;
            justify-content: space-between;
        }

        .c1-bottom-card {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 24px;
            gap: 80px;
            border: 1px solid #303030;
            border-radius: 24px;
        }

        .c1-bottom-card div {
            width: 188px;
        }

        .c1-bottom-card div h2 {
            margin-bottom: 8px;
        }
      `}</style>

      <div className="c1-body">
        {/* main card */}
        <div className=" color-yellow c1-main-card">
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

            <p className=" text-22px-reg">
              Alliatus connects ambitious people into small, <br /> handpicked
              groups for honest feedback, strategy <br /> sessions, and real
              accountability.
            </p>

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

            <p className=" text-16px-reg-italic">
              <span className=" text-16px-semibold">4.9★ average rating</span>
              <br />
              Feedback from real members across sessions.
            </p>
          </div>

          {/* right content */}
          <img src={decoration} alt="decotration" />
        </div>

        {/* bottom card */}
        <div className="c1-bottom-card">
          <div>
            <h2 className=" text-40px-exbold">82%</h2>
            <p className=" text-16px-reg">
              of members say they gained clarity within the first 2 sessions
            </p>
          </div>

          <div>
            <h2 className=" text-40px-exbold">93%</h2>
            <p className=" text-16px-reg">report feeling more accountable </p>
          </div>
          <div>
            <h2 className=" text-40px-exbold">6</h2>
            <p className=" text-16px-reg">
              6-person circles. The sweet spot for focused, diverse
              conversations.
            </p>
          </div>
          <div>
            <h2 className=" text-40px-exbold">1,200+</h2>
            <p className=" text-16px-reg">
              hours of mastermind sessions hosted
            </p>
          </div>
          <div>
            <h2 className=" text-40px-exbold">75%</h2>
            <p className=" text-16px-reg">return for a second cycle </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card1Home;
