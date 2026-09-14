import { css, cx } from "@emotion/css";

const c5_grid = css({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridAutoRows: "1fr",
  gap: "40px",

  "& h1": {
    marginBottom: "23px",
  },
});

const c5_card = css({
  borderRadius: "24px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "40px 40px 48px 40px",
});

function Card5Testimonials() {
  return (
    <>
      <div className={c5_grid}>
        <div>
          <h1 className=" text-16px-reg-uc">testimonials</h1>
          <h2 className=" text-64px-reg">
            What Our <br />
            Members{" "}
            <span className=" text-64px-exbold-italic">
              Are <br />
              Saying
            </span>
          </h2>
        </div>

        {/* card 1 */}
        <div className={cx("color-white", c5_card)}>
          <p className=" text-18px-reg">
            “I joined on a whim, but it’s become a constant in my growth.
            Everyone brings such honest energy — I leave every session clearer
            and more focused.”
          </p>

          <h3 className=" text-18px-reg">— Taylor B. / Creative Coach</h3>
        </div>

        {/* card 1 */}
        <div className={cx("color-white", c5_card)}>
          <p className=" text-18px-reg">
            “It’s rare to find a space that’s this structured and this human.
            I’ve made more progress in 3 months than I had in a year alone.”
          </p>

          <h3 className=" text-18px-reg">— Samir R. / Indie Developer</h3>
        </div>

        {/* card 1 */}
        <div className={cx("color-white", c5_card)}>
          <p className=" text-18px-reg">
            “The feedback is gold. Supportive, but not sugarcoated. I always
            feel seen and challenged in the best way.”
          </p>

          <h3 className=" text-18px-reg">— Renee L. / Marketing Strategist</h3>
        </div>

        {/* card 1 */}
        <div className={cx("color-white", c5_card)}>
          <p className=" text-18px-reg">
            “I used to overthink every move in my business. Now I have a circle
            that keeps me grounded, focused, and—honestly—excited to show up.”
          </p>

          <h3 className=" text-18px-reg">— Alex M. / Wellness Entrepreneur</h3>
        </div>
        {/* card 1 */}
        <div className={cx("color-white", c5_card)}>
          <p className=" text-18px-reg">
            “This isn’t just another online group — it feels like a team. The
            accountability and support have helped me stay consistent like never
            before.”
          </p>

          <h3 className=" text-18px-reg">
            — Jordan K. / Freelance Illustrator
          </h3>
        </div>
      </div>
    </>
  );
}

export default Card5Testimonials;
