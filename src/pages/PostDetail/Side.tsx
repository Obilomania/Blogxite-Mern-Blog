import React from "react";
import styled from "styled-components";
import SideDetail from "../../components/SideDetail";
import { Link } from "react-router-dom";

const Side = () => {
  return (
    <SideD>
      <p className="heading text-secondary">Latest Article</p>
      <div className="sideContent">
        <SideDetail />
        <SideDetail />
        <SideDetail />
        <SideDetail />
        <SideDetail />
        <SideDetail />
        <div className="category">
          <p className="heading text-secondary">Categories : </p>
          <div className="catLinks">
            <Link to="/">Technology</Link>
            <Link to="/">Medical</Link>
            <Link to="/">Education</Link>
            <Link to="/">Fashion</Link>
            <Link to="/">Military</Link>
          </div>
        </div>
      </div>
    </SideD>
  );
};

const SideD = styled.div`
  width: 30%;
  box-shadow: rgba(21, 101, 216, 0.3) 0px 9px 20px;
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 1rem;
  .heading {
    font-weight: bolder;
    font-size: 1.2rem;
  }
  .sideContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
  .category {
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-direction: column;
    gap: 0.6rem;
    .catLinks {
      display: flex;
      align-items: start;
      justify-content: start;
      flex-wrap: wrap;
      gap: 1rem;
    }
    a {
      background: rgba(124, 176, 250, 0.3);
      padding: 0.2rem 1rem;
      border-radius: 1rem;
      letter-spacing: 1px;
      font-weight: 600;
      font-size: 0.7rem;
    }
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    box-shadow: rgba(21, 101, 216, 0.3) 0px 9px 20px;
    padding: 1rem 1.5rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 1rem;
    .heading {
      width: 100%;
      font-weight: bolder;
      font-size: 1.2rem;
      text-align: start;
      margin-bottom: 0.5rem;
    }
    .sideContent {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }
    .category {
      width: 100%;
      display: flex;
      align-items: start;
      justify-content: space-between;
      flex-direction: column;
      gap: 0.6rem;
      .catLinks {
        width: 100%;
        display: flex;
        align-items: start;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 1rem;
      }
      a {
        background: rgba(124, 176, 250, 0.3);
        padding: 0.2rem 1rem;
        border-radius: 1rem;
        letter-spacing: 1px;
        font-weight: 600;
        font-size: 0.7rem;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    box-shadow: rgba(21, 101, 216, 0.3) 0px 9px 20px;
    padding: 1rem 1.5rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 1rem;
    .heading {
      width: 100%;
      font-weight: bolder;
      font-size: 1.2rem;
      text-align: start;
      margin-bottom: 0.5rem;
    }
    .sideContent {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }
    .sideContent {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }
    .category {
      width: 100%;
      display: flex;
      align-items: start;
      justify-content: space-between;
      flex-direction: column;
      gap: 0.6rem;
      .catLinks {
        width: 100%;
        display: flex;
        align-items: start;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 1rem;
      }
      a {
        background: rgba(124, 176, 250, 0.3);
        padding: 0.2rem 1rem;
        border-radius: 1rem;
        letter-spacing: 1px;
        font-weight: 600;
        font-size: 0.7rem;
      }
    }
  }
  @media screen and (max-width: 640px) {
    width: 100%;
    box-shadow: rgba(21, 101, 216, 0.3) 0px 9px 20px;
    padding: 1rem 1.5rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 1rem;
    .heading {
      width: 100%;
      font-weight: bolder;
      font-size: 1.2rem;
      text-align: center;
      margin-bottom: 0.5rem;
    }
    .sideContent {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }
  }
  @media screen and (max-width: 450px) {
    width: 100%;
    box-shadow: rgba(21, 101, 216, 0.3) 0px 9px 20px;
    padding: 1rem 1.5rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 1rem;
    .heading {
      width: 100%;
      font-weight: bolder;
      font-size: 1.2rem;
      text-align: center;
      margin-bottom: 0.5rem;
    }
    .sideContent {  
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }
    .sideContent {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }
    .category {
      width: 100%;
      display: flex;
      align-items: start;
      justify-content: space-between;
      flex-direction: column;
      gap: 0.6rem;
      .catLinks {
        width: 100%;
        display: flex;
        align-items: start;
        justify-content: flex-start;
        flex-wrap: wrap;
        gap: 1rem;
      }
      a {
        background: rgba(124, 176, 250, 0.3);
        padding: 0.2rem 1rem;
        border-radius: 1rem;
        letter-spacing: 1px;
        font-weight: 600;
        font-size: 0.7rem;
      }
    }
  }
`;
export default Side;
