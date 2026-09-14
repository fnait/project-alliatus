import { css, cx } from "@emotion/css";

import img from "../img/card3-image.svg";
import decoration from "../img/card3-decoration.svg";

const c3_body = css({
  position: "relative",
});

const c3_top_content = css({
  display: "flex",
  justifyContent: "space-between",
  flexFlow: "row",

  "& img": {
    position: "absolute",
    top: "-40px",
    right: "120px",
    zIndex: 2,
    pointerEvents: "none",
  },
});

const c3_tc_left = css({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  height: "294px",
  width: "648px",
  marginBottom: "70px",
});

const c3_bot_content = css({
  display: "grid",
  gridTemplateColumns: "426px 426px 426px",
  gridTemplateRows: "260px 260px 260px",
  gap: "2.5rem",
  gridTemplateAreas: `
                "box-1 box-2 ."
                "box-4 box-5 box-6"
                "box-4 box-7 box-7"`,
});

const c3_bc_card_set = css({
  borderRadius: "24px",
  padding: " 15px 60px 0 40px",

  "& p": {
    lineHeight: "27px",
  },
});

const c3_topic_text = css({
  display: "flex",
  flexDirection: "row",
  alignItems: "end",
  paddingBottom: "15px",

  "& h3": {
    margin: "0 0 10px 15px",
  },
});

function Card3How() {
  return (
    <>
      <div className={c3_body}>
        <div className={c3_top_content}>
          <div className={c3_tc_left}>
            <h1 className=" text-16px-reg-uc">How It Works</h1>
            <h2 className=" text-64px-reg">
              From Application to Transformation —
              <span className=" text-64px-exbold-italic"> Step by Step</span>
            </h2>
          </div>

          <img src={decoration} alt="" />
        </div>

        <div className={c3_bot_content}>
          {/* CARD1 - Template*/}
          <div
            className={cx(c3_bc_card_set, "color-yellow")}
            style={{ gridArea: "box-1" }}
          >
            <div className={c3_topic_text}>
              <h2 className=" text-60px-black-italic">01</h2>
              <h3 className=" text-16px-reg-uc">Apply Online</h3>
            </div>
            <p className=" text-18px-reg">
              Tell us about your goals, background, and what kind of support
              you’re seeking.
            </p>
          </div>

          {/* CARD2 - Template*/}
          <div
            className={cx(c3_bc_card_set, "color-white")}
            style={{ gridArea: "box-2" }}
          >
            <div className={c3_topic_text}>
              <h2 className=" text-60px-black-italic">02</h2>
              <h3 className=" text-16px-reg-uc">Get Matched</h3>
            </div>
            <p className=" text-18px-reg">
              We carefully place you in a mastermind circle of 5–6 aligned
              members.
            </p>
          </div>

          {/*WIDE - Left*/}
          <div
            style={{
              gridArea: "box-4",
              borderRadius: "24px",
            }}
          >
            <img src={img} alt="image" />
          </div>

          {/* CARD3 - Template*/}
          <div
            className={cx(c3_bc_card_set, "color-border")}
            style={{ gridArea: "box-5" }}
          >
            <div className={c3_topic_text}>
              <h2 className=" text-60px-black-italic">03</h2>
              <h3 className=" text-16px-reg-uc">Get Matched</h3>
            </div>
            <p className=" text-18px-reg">
              We carefully place you in a mastermind circle of 5–6 aligned
              members.
            </p>
          </div>

          {/* CARD4 - Template*/}
          <div
            className={cx(c3_bc_card_set, "color-white")}
            style={{ gridArea: "box-6" }}
          >
            <div className={c3_topic_text}>
              <h2 className=" text-60px-black-italic">04</h2>
              <h3 className=" text-16px-reg-uc">Grow With Accountability</h3>
            </div>
            <p className=" text-18px-reg">
              Set goals, stay on track, and get continuous feedback from your
              circle.
            </p>
          </div>

          {/*WIDE - Bottom*/}
          <div
            className="color-white"
            style={{
              gridArea: "box-7",
              borderRadius: "24px",
              padding: "40px",
            }}
          >
            <h3 className=" text-16px-reg-uc" style={{ paddingBottom: "30px" }}>
              what’s included
            </h3>
            <p className=" text-18px-reg" style={{ lineHeight: "30px" }}>
              Private online community Goal-tracking and reflection tools Access
              to session recordings (optional for privacy) Session prep
              templates & prompts Library of expert resources
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card3How;
