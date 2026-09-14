import { css, cx } from "@emotion/css";

const c7_conteiner = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "70px",
});

const c7_text = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const c7_card_place = css({
  display: "flex",
  flexDirection: "row",
  alignItems: "stretch", //
  gap: "40px",
  width: "100%",
  height: "100%",
});

const c7_card = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  textAlign: "center",
  borderRadius: "40px",
  padding: "50px 0 80px 0",
  minWidth: 0,
  flex: 1,
});

const c7_card_content = css({
  display: "flex",
  gap: "50px",
  flexDirection: "column",

  "& h3": { marginBottom: "10px" },
  "& h4": { marginBottom: "5px" },
});

const c7_card_p = css({
  display: "flex",
  gap: "15px",
  flexDirection: "column",
});

function Card7Price() {
  return (
    <>
      <div className={c7_conteiner}>
        <div className={c7_text}>
          <h1 className=" text-16px-reg-uc" style={{ marginBottom: "20px" }}>
            PRICING
          </h1>
          <h2 className=" text-64px-reg">
            <span className=" text-64px-exbold-italic">Plans </span>
            That Fit You
          </h2>
        </div>

        {/* card place */}
        <div className={c7_card_place}>
          {/* card 1 */}
          <div className={cx(c7_card, "color-white")}>
            <div className={c7_card_content}>
              <div>
                <h3 className=" text-40px-reg">Starter</h3>
                <h4 className=" text-16px-reg">
                  Perfect for trying things out.
                </h4>
                <h5>
                  <span className=" text-50px-exbold-italic">€49</span>
                  <span className=" text-40px-reg">/</span>
                  <span className=" text-30px-reg">mo</span>
                </h5>
              </div>
              <div className={c7_card_p}>
                <p className=" text-18px-reg">2 group sessions/month</p>
                <p className=" text-18px-reg">Community access</p>
                <p className=" text-18px-reg">Session summaries</p>
                <p className=" text-18px-reg">Private messaging</p>
              </div>
            </div>
            <button className="color-grey" style={{ marginTop: "50px" }}>
              <span className=" text-20px-reg">Join Now</span>
            </button>
          </div>

          {/* card 2 */}
          <div className={cx(c7_card, "color-yellow")}>
            <div className={c7_card_content}>
              <div>
                <h3 className=" text-40px-reg">Growth</h3>
                <h4 className=" text-16px-reg">Our most popular membership.</h4>
                <h5>
                  <span className=" text-50px-exbold-italic">€89</span>
                  <span className=" text-40px-reg">/</span>
                  <span className=" text-30px-reg">mo</span>
                </h5>
              </div>
              <div className={c7_card_p}>
                <p className=" text-18px-reg">Weekly group sessions</p>
                <p className=" text-18px-reg">Goal-tracking tools</p>
                <p className=" text-18px-reg">Full community access</p>
                <p className=" text-18px-reg">Access to recordings</p>
                <p className=" text-18px-reg">Priority support</p>
              </div>
            </div>
            <button className="color-grey" style={{ marginTop: "50px" }}>
              <span className=" text-20px-reg">Start Growing</span>
            </button>
          </div>

          {/* card 3 */}
          <div className={cx(c7_card, "color-white")}>
            <div className={c7_card_content}>
              <div>
                <h3 className=" text-40px-reg">Circle+</h3>
                <h4 className=" text-16px-reg">
                  For full support & 1:1 coaching
                </h4>
                <h5>
                  <span className=" text-50px-exbold-italic">€149</span>
                  <span className=" text-40px-reg">/</span>
                  <span className=" text-30px-reg">mo</span>
                </h5>
              </div>
              <div className={c7_card_p}>
                <p className=" text-18px-reg">Everything in Growth</p>
                <p className=" text-18px-reg">Monthly 1:1 coaching</p>
                <p className=" text-18px-reg">Personalized session recaps</p>
                <p className=" text-18px-reg">VIP Q&A calls</p>
                <p className=" text-18px-reg">Early event access</p>
              </div>
            </div>
            <button className="color-grey" style={{ marginTop: "50px" }}>
              <span className=" text-20px-reg">Join Circle+</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card7Price;
