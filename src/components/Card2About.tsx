import decoration from "../img/card2-image.svg";
import { css } from "@emotion/css";

const c2_body = css({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "70px",
});

const c2_top_info = css({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "center",
  gap: "20px",
});

const c2_right_column = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
});

const c2_rc_top_text = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: " 0 100px 70px 50px",
  "& p": {
    lineHeight: "27px",
  },
});

const c2_rc_bot_text = css({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  justifyContent: "space-between",

  "& div": {
    display: "flex",
    flexDirection: "column",
    padding: "50px",
    backgroundColor: "#FFFFFF",
    gap: "22px",
    borderRadius: "24px",
  },

  "& h3": {
    lineHeight: "27px",
  },
});

function Card2About() {
  return (
    // Card2About
    <>
      {/* card body */}
      <div className={c2_body}>
        {/* top information */}
        <div className={c2_top_info}>
          <h1 className=" text-16px-reg-uc">What is Alliatus?</h1>
          <h2 className=" text-64px-reg">
            <span className=" text-64px-exbold-italic">Not</span> Your Typical
            <br />
            Networking Group.
          </h2>
        </div>

        {/* bottom information */}
        <div style={{ display: "flex", flexDirection: "row", gap: "40px" }}>
          {/* left colum */}
          <div>
            <img src={decoration} alt="decotration" />
          </div>

          {/* right colum */}
          <div className={c2_right_column}>
            <div className={c2_rc_top_text}>
              <p className=" text-18px-reg">
                Alliatus is a curated mastermind platform that brings together
                motivated individuals in small groups for deep conversation,
                honest feedback, and collective accountability.
              </p>
            </div>

            <div className={c2_rc_bot_text}>
              <div>
                <h3 className=" text-16px-reg-uc">Small, Handpicked Circles</h3>
                <p className=" text-18px-reg">
                  You’re matched with 5–6 people who are aligned with your
                  stage, goals, and mindset.
                </p>
              </div>
              <div>
                <h3 className=" text-16px-reg-uc">Small, Handpicked Circles</h3>
                <p className=" text-18px-reg">
                  No fluff. Get feedback, ask for help, and brainstorm
                  challenges in structured calls.
                </p>
              </div>
              <div>
                <h3 className=" text-16px-reg-uc">Small, Handpicked Circles</h3>
                <p className=" text-18px-reg">
                  Ongoing sessions to help you stay accountable, make bold
                  moves, and reach goals faster.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card2About;
