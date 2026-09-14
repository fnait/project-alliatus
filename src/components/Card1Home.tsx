import decoration from "../img/card1-image.svg";
import { css, cx } from "@emotion/css";

const c1_body = css({
  display: "flex",
  flexDirection: "column",
  gap: "40px",
});

const c1_main_card = css({
  display: "flex",
  flexDirection: "row",
  padding: "122px 88px 70px 73px",
  borderRadius: "40px",
  justifyContent: "space-between",
});

const c1_bottom_card = css({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "24px",
  gap: "80px",
  borderRadius: "24px",

  "& div": {
    width: "188px",
  },

  "& h2": {
    marginBottom: "8px",
  },
});

const c1_left_buttons = css({
  display: "flex",
  flexDirection: "row",
  gap: "20px",
});

function Card1Home() {
  return (
    // Card1Home
    <>
      <div className={c1_body}>
        {/* main card */}
        <div className={cx(c1_main_card, "color-yellow")}>
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
            <div className={cx(c1_left_buttons, "text-20px-reg")}>
              <button className="color-grey">Apply Now</button>
              <button className="color-border">Learn How It Works</button>
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
        <div className={cx("color-border", c1_bottom_card)}>
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
