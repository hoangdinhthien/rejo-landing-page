import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BsFacebook } from 'react-icons/bs';
import axios from 'axios';

export default function Footer() {
  const [viewCount, setViewCount] = useState(0);

  const fetchViewCount = async () => {
    try {
      const response = await axios.get('https://travel-api-nemi.onrender.com/api/count');

      if (response.status === 200) {
        setViewCount(response.data.count);
      }
    } catch (error) {
      console.error('Error fetching view count:', error);
    }
  };

  const incrementViewCount = async () => {
    try {
      const response = await axios.get('https://travel-api-nemi.onrender.com/api/count/increment');

      if (response.status === 200) {
        // Nếu cuộc gọi API thành công, cập nhật lại số lượt view
        fetchViewCount();
      }
    } catch (error) {
      console.error('Error incrementing view count:', error);
    }
  };

  const facebookURL = 'https://www.facebook.com/profile.php?id=61551848625083';

  const openFacebook = () => window.open(facebookURL, '_blank');

  useEffect(() => {
    // Gọi cả hai hàm khi component được render
    fetchViewCount();
    incrementViewCount();
  }, []);

  return (
    <FooterContainer>
      <span>Copyright &copy; 2023 ReJo. All rights reserved</span>
      <ul className='links'>
        <li>
          <a href='#hero'>Home</a>
        </li>
        <li>
          <a href='#services'>About</a>
        </li>
        <li>
          <a href='#recommend'>Places</a>
        </li>
        <li>
          <a href='#testimonials'>Testimonials</a>
        </li>
      </ul>
      <ul className='social__links'>
        <li>
          <BsFacebook onClick={openFacebook} />
        </li>
        <li>
          <span>View Count: {viewCount}</span>
        </li>
      </ul>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  background-color: #d0d8ff;
  border-radius: 0.5rem;
  padding: 2.5rem;

  ul {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li {
      a {
        text-decoration: none;
        color: black;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #302ce9;
        }
      }
      svg {
        font-size: 1.3rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #302ce9;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
    ul {
      flex-direction: column;
    }
    .social__links {
      flex-direction: row;
    }
  }
`;
