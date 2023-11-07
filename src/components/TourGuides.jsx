import React, { useState } from "react";
import styled from "styled-components";

import TourGuide1 from "../assets/TourGuide1.png";
import TourGuide2 from "../assets/TourGuide2.png";
import TourGuide3 from "../assets/TourGuide3.png";
import TourGuide4 from "../assets/TourGuide4.png";

export default function TourGuides() {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>Popular Tour Guiders</h2>
      </div>
      <div className="testimonials">
        {/* tour guide 1 */}
        <div className="testimonial">
          <div className="info">
            <img
              src={TourGuide1}
              alt=""
            />
            <div className="details">
              <h4>Tran Quang Minh</h4>
              {/* <span>Da Nang</span> */}
            </div>
          </div>
          <div style={{ height: "13rem" }}>
            <p>
              I'm a passionate advocate for preserving the heritage and
              traditions of the places I guide. Exploring history through
              architecture and cultural stories is my way of sharing the world's
              unique narratives with travelers. Let's embark on a memorable
              journey together!
            </p>
          </div>
          <p style={{ paddingTop: "2rem" }}>Contact me: (08) 38368826</p>
        </div>

        {/* tour guide 2 */}
        <div className="testimonial">
          <div className="info">
            <img
              src={TourGuide2}
              alt=""
            />
            <div className="details">
              <h4>Pham Thi Thu Ha</h4>
              <span>Phan Thiet</span>
            </div>
          </div>
          <div style={{ height: "13rem" }}>
            <p>
              As a nature enthusiast, I'm dedicated to showcasing the natural
              wonders of South America. Whether it's hiking through lush
              rainforests or observing unique wildlife, I'm here to make your
              adventure unforgettable.
            </p>
          </div>
          <p style={{ paddingTop: "2rem" }}>Contact me: (08) 39102650 </p>
        </div>
        {/* tour guide 3 */}
        <div className="testimonial">
          <div className="info">
            <img
              src={TourGuide3}
              alt=""
            />
            <div className="details">
              <h4>Phan Minh Hieu</h4>
              <span>Da Lat</span>
            </div>
          </div>
          <div style={{ height: "13rem" }}>
            <p>
              I'm here to guide you through the spiritual and cultural wonders
              of India. Join me on a transformative journey to discover the
              ancient wisdom and traditions that have shaped this incredible
              land.
            </p>
          </div>
          <p style={{ paddingTop: "2rem" }}>Contact me: (08) 38203857 </p>
        </div>
        {/* tour guide 4 */}
        <div className="testimonial">
          <div className="info">
            <img
              src={TourGuide4}
              alt=""
            />
            <div className="details">
              <h4>Le Van Tuan</h4>
              <span>Vung Tau</span>
            </div>
          </div>
          <div style={{ height: "13rem" }}>
            <p>
              I'm an advocate for responsible tourism and a nature enthusiast.
              Let's explore the pristine rainforests, observe exotic wildlife,
              and experience the thrill of outdoor adventures while preserving
              the environment.
            </p>
          </div>
          <p style={{ paddingTop: "2rem" }}>Contact me: (08) 38655259 </p>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: flex-start;
        gap: 1rem;
        align-items: center;
        margin-bottom: 1rem;
        img {
          border-radius: 3rem;
          height: 5rem;
          width: 4rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
        .tourGuideContent {
          p {
            justify-content: center;
            align-items: center;
            text-align: center;
            font-size: large;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;
