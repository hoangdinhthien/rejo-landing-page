import React, { useState } from 'react';
import styled from 'styled-components';
import Destination1 from '../assets/Destination1.png';
import Destination2 from '../assets/Destination2.png';
import Destination3 from '../assets/Destination3.png';
import Destination4 from '../assets/Destination4.png';
import Destination5 from '../assets/Destination5.png';
import Destination6 from '../assets/Destination6.png';
import info1 from '../assets/info1.png';
import info2 from '../assets/info2.png';
import info3 from '../assets/info3.png';

export default function Recommend() {
  const data = [
    {
      image: Destination1,
      title: 'Ho Chi Minh',
      subTitle:
        'Ho Chi Minh City, formerly known as Saigon, is the largest and most populous city in Vietnam. It is located in the southern part of the country and serves as its economic and cultural hub. The city is renowned for its vibrant street life, historical landmarks, and a blend of modern and colonial architecture. ',
      cost: '38,800',
      duration: 'Approx 2 night trip',
    },
    {
      image: Destination2,
      title: 'Phan Thiet',
      subTitle:
        "Phan Thiet is a coastal city in southern Vietnam, known for its stunning beaches and fishing industry. It is the capital of Binh Thuan Province and is situated on the Southeast Asian country's southeastern coast. Phan Thiet's Mui Ne Beach is particularly famous for its unique sand dunes and kite-surfing opportunities. Additionally, the city is renowned for its fresh seafood,",
      cost: '54,200',
      duration: 'Approx 2 night trip',
    },
    {
      image: Destination3,
      title: 'Mui Ne',
      subTitle:
        'Mui Ne is a picturesque coastal town located in Binh Thuan Province, Vietnam, known for its stunning landscapes and beautiful beaches. The town is famous for its vibrant red and white sand dunes, which create a surreal desert-like atmosphere, attracting tourists and photographers alike. Mui Ne is a hotspot for water sports enthusiasts, with activities like wind and kitesurfing being very popular due to its consistent strong winds. ',
      cost: '45,500',
      duration: 'Approx 2 night trip',
    },
    {
      image: Destination4,
      title: 'Da Nang',
      subTitle:
        'Da Nang is a vibrant and rapidly growing coastal city located in central Vietnam. It is known for its stunning sandy beaches, with My Khe Beach being one of the most popular and pristine in the region. The city is home to a mix of modern and traditional Vietnamese culture, with attractions like the Marble Mountains and the ancient town of Hoi An within easy reach.',
      cost: '24,100',
      duration: 'Approx 1 night trip',
    },
    {
      image: Destination5,
      title: 'Da Lat',
      subTitle:
        'Da Lat is a charming city nestled in the Central Highlands of Vietnam, often referred to as the "City of Eternal Spring" due to its pleasant, temperate climate year-round. The city is renowned for its stunning natural beauty, featuring lush pine forests, picturesque lakes, and rolling hills. ',
      cost: '95,400',
      duration: 'Approx 2 night 2 day trip',
    },
    {
      image: Destination6,
      title: 'Vung Tau',
      subTitle:
        'Da Lat is a charming city nestled in the Central Highlands of Vietnam, often referred to as the "City of Eternal Spring" due to its pleasant, temperate climate year-round. The city is renowned for its stunning natural beauty, featuring lush pine forests, picturesque lakes, and rolling hills. ',
      cost: '38,800',
      duration: 'Approx 3 night 2 day trip',
    },
  ];

  const packages = [
    'The Weekend Break',
    'The Package Holiday',
    'The Group Tour',
    'Long Term Slow Travel',
  ];

  const [active, setActive] = useState(1);
  return (
    <Section id='recommend'>
      <div className='title'>
        <h2>Recommended Destinations</h2>
      </div>
      <div className='packages'>
        <ul>
          {packages.map((pkg, index) => {
            return (
              <li
                className={active === index + 1 ? 'active' : ''}
                onClick={() => setActive(index + 1)}
              >
                {pkg}
              </li>
            );
          })}
        </ul>
      </div>
      <div className='destinations'>
        {data.map((destination) => {
          return (
            <div className='destination'>
              <img
                src={destination.image}
                alt=''
              />
              <h3>{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <div className='info'>
                <div className='services'>
                  <img
                    src={info1}
                    alt=''
                  />
                  <img
                    src={info2}
                    alt=''
                  />
                  <img
                    src={info3}
                    alt=''
                  />
                </div>
                <h4>{destination.cost}</h4>
              </div>
              <div className='distance'>
                <span>1000 Kms</span>
                <span>{destination.duration}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
