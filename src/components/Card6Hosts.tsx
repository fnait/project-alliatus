import { css } from "@emotion/css";
import photo1 from "../img/card6-person-photo1.svg";
import photo2 from "../img/card6-person-photo2.svg";
import photo3 from "../img/card6-person-photo3.svg";
import photo4 from "../img/card6-person-photo4.svg";
import linkedIn from "../img/card6-linkedin-logo.svg";

const c6_main_text = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const c6_cards = css({
  display: "flex",
  flexDirection: "row",
  marginTop: "70px",

  gap: "40px",
  alignItems: "flex-start",
});

const c6_card_conteiner = css({
  height: "653px",
  width: "310px",
  display: "felx",
  flexDirection: "column",
  justifyContent: "space-between",

  "& h3 ": { marginBottom: "20px" },
  "& h4 ": { marginBottom: "25px" },
  "& p": { marginBottom: "20px" },
  "& button": { padding: 0 },
});

function Card6Hosts() {
  return (
    <>
      {/* component */}
      <div className={c6_main_text}>
        {/* text */}
        <div className={c6_main_text} style={{ textAlign: "center" }}>
          <h1 className=" text-16px-reg-uc">Your Hosts & Guides</h1>
          <h2 className=" text-64px-reg">
            Meet Your <br />
            <span className=" text-64px-exbold-italic">Facilitators</span>
          </h2>
        </div>

        {/* cards */}
        <div className={c6_cards}>
          <div className={c6_card_conteiner}>
            <div>
              <img
                src={photo1}
                alt="Facilitator-Amira-Sullivan"
                style={{ marginBottom: "30px" }}
              />

              <h3 className=" text-40px-reg">Amira Sullivan</h3>

              <h4 className=" text-16px-reg-uc">
                Creative Strategist & Group Facilitator
              </h4>

              <p className=" text-18px-reg">
                With over a decade of guiding creative professionals, Amira
                brings clarity, structure, and a spark of inspiration to every
                session.
              </p>
            </div>

            <button style={{ padding: 0 }}>
              <img src={linkedIn} alt="linkedIn-Amira-Sullivan" />
            </button>
          </div>

          <div className={c6_card_conteiner}>
            <div>
              <img
                src={photo2}
                alt="Facilitator-Lucas-Varela"
                style={{ marginBottom: "30px" }}
              />

              <h3 className=" text-40px-reg">Lucas Varela</h3>

              <h4 className=" text-16px-reg-uc">
                Accountability Coach & Solopreneur{" "}
              </h4>

              <p className=" text-18px-reg">
                Lucas helps members stay focused and follow through with
                intention. His calm energy and practical tools make progress
                feel possible.
              </p>
            </div>
            <button>
              <img src={linkedIn} alt="linkedIn-Lucas-Varela" />{" "}
            </button>
          </div>

          <div className={c6_card_conteiner}>
            <div>
              <img
                src={photo3}
                alt="Facilitator-Elena-Morozova"
                style={{ marginBottom: "30px" }}
              />

              <h3 className=" text-40px-reg">Elena Morozova</h3>

              <h4 className=" text-16px-reg-uc">
                Mindset Coach & Community Builder
              </h4>

              <p className=" text-18px-reg">
                Elena supports members through thoughtful reflection and honest
                conversation. Her strength lies in helping people see the bigger
                picture.
              </p>
            </div>
            <button>
              <img src={linkedIn} alt="linkedIn-Elena-Morozova" />
            </button>
          </div>

          <div className={c6_card_conteiner}>
            <div>
              <img
                src={photo4}
                alt="Facilitator-Jason-Kim"
                style={{ marginBottom: "30px" }}
              />

              <h3 className=" text-40px-reg">Jason Kim</h3>

              <h4 className=" text-16px-reg-uc">
                Startup Mentor & Strategic Thinker
              </h4>

              <p className=" text-18px-reg">
                With a background in tech and coaching, Jason brings sharp
                insight and a deep belief in peer-led growth. He’s known for
                asking just the right questions.
              </p>
            </div>
            <button>
              <img src={linkedIn} alt="linkedIn-Jason-Kim" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card6Hosts;
