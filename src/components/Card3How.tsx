// import React from "react";
// import { css } from "@emotion/css";

import img from "../img/card3-image.svg";
import decoration from "../img/card3-decoration.svg";

function Card3How() {
  return (
    <>
      <div style={{ marginTop: "150px", position: "relative" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexFlow: "row",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexDirection: "column",
              height: "294px",
              width: "648px",
              marginBottom: "70px",
            }}
          >
            <h1 className=" text-16px-reg-uc">How It Works</h1>
            <h2 className=" text-64px-reg">
              From Application to Transformation —
              <span className=" text-64px-exbold-italic"> Step by Step</span>
            </h2>
          </div>

          <img
            src={decoration}
            alt=""
            style={{
              position: "absolute",
              top: "-40px",
              right: "120px",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "426px 426px 426px",
            gridTemplateRows: "260px 260px 260px",
            gap: "2.5rem",
            gridTemplateAreas: `
                "box-1 box-2 box-3"
                "box-4 box-5 box-6"
                "box-4 box-7 box-7"`,
          }}
        >
          {/* CARD1 */}
          <div
            className="color-yellow"
            style={{
              gridArea: "box-1",
              borderRadius: "24px",
              padding: " 15px 60px 0 40px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "end",
                paddingBottom: "15px",
              }}
            >
              <h2 className=" text-60px-black-italic">01</h2>
              <h3
                className=" text-16px-reg-uc"
                style={{ margin: "0 0 10px 15px" }}
              >
                Apply Online
              </h3>
            </div>
            <p className=" text-18px-reg" style={{ lineHeight: "27px" }}>
              Tell us about your goals, background, and what kind of support
              you’re seeking.
            </p>
          </div>

          {/* CARD2 */}
          <div
            className="color-white"
            style={{
              gridArea: "box-2",
              borderRadius: "24px",
              padding: " 15px 60px 0 40px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "end",
                paddingBottom: "15px",
              }}
            >
              <h2 className=" text-60px-black-italic">02</h2>
              <h3
                className=" text-16px-reg-uc"
                style={{ margin: "0 0 10px 15px" }}
              >
                Get Matched
              </h3>
            </div>
            <p className=" text-18px-reg" style={{ lineHeight: "27px" }}>
              We carefully place you in a mastermind circle of 5–6 aligned
              members.
            </p>
          </div>

          {/* CARD3 */}
          <div style={{ gridArea: "box-3", backgroundColor: "none" }}></div>

          {/* CARD4 */}
          <div
            style={{
              gridArea: "box-4",
              backgroundColor: "black",
              borderRadius: "24px",
            }}
          >
            <img src={img} alt="image" />
          </div>

          <div
            style={{
              gridArea: "box-5",
              borderRadius: "24px",
              padding: " 15px 60px 0 40px",
              border: "1px solid #303030",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "end",
                paddingBottom: "15px",
              }}
            >
              <h2 className=" text-60px-black-italic">03</h2>
              <h3
                className=" text-16px-reg-uc"
                style={{ margin: "0 0 10px 15px" }}
              >
                Get Matched
              </h3>
            </div>
            <p className=" text-18px-reg" style={{ lineHeight: "27px" }}>
              We carefully place you in a mastermind circle of 5–6 aligned
              members.
            </p>
          </div>

          <div
            className="color-white"
            style={{
              gridArea: "box-6",
              borderRadius: "24px",
              padding: " 15px 60px 0 40px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "end",
                paddingBottom: "15px",
              }}
            >
              <h2 className=" text-60px-black-italic">02</h2>
              <h3
                className=" text-16px-reg-uc"
                style={{ margin: "0 0 10px 15px" }}
              >
                Get Matched
              </h3>
            </div>
            <p className=" text-18px-reg" style={{ lineHeight: "27px" }}>
              We carefully place you in a mastermind circle of 5–6 aligned
              members.
            </p>
          </div>

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
