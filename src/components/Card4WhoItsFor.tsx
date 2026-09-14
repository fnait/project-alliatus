import { css, cx } from "@emotion/css";
import decor_left from "../img/card4-decoration-left.svg";
import decor_right from "../img/card4-decoration-right.svg";

const c4_top_cont = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: "20px",
  marginBottom: "70px",
});

const c4_bot_cont = css({
  display: "flex",
  flexDirection: "row",
  gap: "40px",
});

const c4_bot_cards = css({
  width: "660px",
  borderRadius: "40px",
  padding: "70px 60px 49px 60px",

  display: "flex",
  flexDirection: "column",
  gap: "60px",
});

const c4_msg_place = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "12px",

  "& p": {
    padding: "15px 24px",
    borderRadius: "24px",
    border: "1px solid #303030",
    backgroundColor: "#ffffff",
  },
});

const c4_image_holder = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  "& img": {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "contain",
    transform: "scale(1.17)",
    transformOrigin: "center",
  },
});

function Card4WhoItsFor() {
  return (
    <>
      <div>
        {/* top info */}
        <div className={c4_top_cont}>
          <h1 className=" text-16px-reg-uc">Who It’s For</h1>
          <h2 className=" text-64px-reg">
            Made for People <br />
            <span className=" text-64px-exbold-italic">Like You</span>
          </h2>
        </div>
        {/* bottom cards */}
        <div className={c4_bot_cont}>
          {/* left card */}
          <div className={cx("color-yellow", c4_bot_cards)}>
            <h3 className=" text-40px-reg">
              This{" "}
              <span className=" text-40px-exbold-italic"> Is for You </span>{" "}
              If...
            </h3>

            {/* message place */}
            <div className={c4_msg_place}>
              <p className=" text-16px-reg">
                You`re an{" "}
                <span className=" text-16px-semibold">
                  entrepreneur, solopreneur,
                </span>{" "}
                or <span className=" text-16px-semibold">freelancer</span>
              </p>

              <p className=" text-16px-reg">
                You crave honest{" "}
                <span className=" text-16px-semibold">feedback</span> and
                outside perspective
              </p>

              <p className=" text-16px-reg">
                You want to{" "}
                <span className=" text-16px-semibold">help others</span> while
                <span className=" text-16px-semibold">evolving yourself</span>
              </p>

              <p className=" text-16px-reg">
                You value{" "}
                <span className=" text-16px-semibold">real conversations</span>{" "}
                over shallow networking
              </p>
            </div>

            <div className={c4_image_holder}>
              <img src={decor_left} alt="decoration-left" />
            </div>
          </div>

          {/* rigt card */}
          <div className={cx("color-border", c4_bot_cards)}>
            <h3 className=" text-40px-reg">
              This Is{" "}
              <span className=" text-40px-exbold-italic"> NOT for You </span>{" "}
              If...
            </h3>

            <div className={c4_image_holder}>
              <img src={decor_right} alt="decoration-left" />
            </div>

            {/* message place */}
            <div className={c4_msg_place}>
              {/* message */}
              <p className=" text-16px-reg">
                You’re just looking to promote your business
              </p>

              <p className=" text-16px-reg">
                You can’t commit to regular attendance
              </p>

              <p className=" text-16px-reg">
                You’re not open to giving or receiving feedback
              </p>

              <p className=" text-16px-reg">
                You prefer passive learning to active participation
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card4WhoItsFor;
