import React from "react";
import styled from "styled-components";
import { MdOutlineVerifiedUser } from "react-icons/md";
let PostIMG = require("../assets/postImages/three.png");
let Author = require("../assets/Obi-min.png");

const PostCard = () => {
  return (
    <PCard>
      <div className="imgeheading">
        <img src={PostIMG} alt="Heading" />
      </div>
      <div className="content">
        <p className="tag">Technology</p>
        <p className="title text-dark">Into the world of tech and Developers</p>
        <p className="writeUp">
          Tech is taking over and the demand for developers is on the rise
        </p>
        <div className="author">
          <div className="authee">
            <img src={Author} alt="blogger" />
            <p className="name">Obilomania</p>
            <p className="status text-green-500">
              <MdOutlineVerifiedUser />
            </p>
          </div>
          <p className="date font-bold text-[.8rem]">21 May</p>
        </div>
      </div>
    </PCard>
  );
};

const PCard = styled.div`
  box-shadow: rgba(21, 101, 216, 0.3) 0px 9px 20px;
  width: 20rem;
  padding-bottom: 1rem;
  overflow: hidden;
  height: 27.5rem;
  border-radius: 1rem;
  /* height:28rem; */
  .title {
    font-weight: bolder;
  }
  .content {
    padding: 3rem 1rem 1rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1.1rem;
    position: relative;
  }
  .tag {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background: rgba(124, 176, 250, 0.3);
    font-size:.8rem;
    padding:.3rem .6rem;
    border-radius:1rem;
    letter-spacing:1px;
    font-weight:bolder;
  }
  .writeUp {
    font-size: 0.9rem;
    color: grey;
    text-align: justify;
  }
  .imgeheading {
    width: 100%;
    height: 203.45px;
    overflow: hidden;
  }
  img {
    width: 20rem;
  }
  .author {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .authee {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
    font-size: 0.9rem;
    .name {
      font-weight: bolder;
      font-style: italic;
      margin-right: 0.2rem;
    }
    img {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      margin-right: 0.5rem;
    }
  }
  @media screen and (max-width: 1200px) {
    width: fit-content;
    box-shadow: rgba(21, 101, 216, 0.3) 0px 9px 20px;
    width: 20rem;
    padding-bottom: 1rem;
    overflow: hidden;
    height: 26rem;
    border-radius: 1rem;
    .title {
      font-weight: bolder;
    }
    .content {
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1.1rem;
    }
    .writeUp {
      font-size: 0.9rem;
      color: grey;
      text-align: justify;
    }
    .imgeheading {
      width: 100%;
      height: 203.45px;
      overflow: hidden;
    }
    img {
      width: 20rem;
    }
    .author {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .authee {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.2rem;
      font-size: 0.9rem;
      .name {
        font-weight: bolder;
        font-style: italic;
        margin-right: 0.2rem;
      }
      img {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        margin-right: 0.5rem;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    width: fit-content;
    box-shadow: rgba(21, 101, 216, 0.3) 0px 9px 20px;
    width: 100%;
    padding-bottom: 1rem;
    overflow: hidden;
    height: 23rem;
    border-radius: 1rem;
    .title {
      font-weight: bolder;
      font-size: 1.3rem;
    }
    .content {
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1.1rem;
    }
    .writeUp {
      font-size: 1rem;
      color: grey;
      text-align: justify;
    }
    .imgeheading {
      width: 100%;
      height: 203.45px;
      overflow: hidden;
    }
    img {
      width: 100%;
    }
    .author {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .authee {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.2rem;
      font-size: 0.9rem;
      .name {
        font-weight: bolder;
        font-style: italic;
        margin-right: 0.2rem;
      }
      img {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        margin-right: 0.5rem;
      }
    }
  }
  @media screen and (max-width: 640px) {
    width: fit-content;
    box-shadow: rgba(21, 101, 216, 0.3) 0px 9px 20px;
    width: 100%;
    padding-bottom: 0rem;
    overflow: hidden;
    height: 23rem;
    border-radius: 1rem;
    .title {
      font-weight: bolder;
    }
    .content {
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 0rem;
    }
    .writeUp {
      font-size: 0.9rem;
      color: grey;
      text-align: justify;
    }
    .imgeheading {
      width: 100%;
      height: 203.45px;
      overflow: hidden;
    }
    img {
      width: 100%;
    }
    .author {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .authee {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.2rem;
      font-size: 0.9rem;
      .name {
        font-weight: bolder;
        font-style: italic;
        margin-right: 0.2rem;
      }
      img {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        margin-right: 0.5rem;
      }
    }
  }
  @media screen and (max-width: 450px) {
    width: fit-content;
    box-shadow: rgba(21, 101, 216, 0.3) 0px 9px 20px;
    width: 100%;
    padding-bottom: 0rem;
    overflow: hidden;
    height: 23rem;
    border-radius: 1rem;
    .title {
      font-weight: bolder;
    }
    .content {
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 0rem;
    }
    .writeUp {
      font-size: 0.9rem;
      color: grey;
      text-align: justify;
    }
    .imgeheading {
      width: 100%;
      height: 203.45px;
      overflow: hidden;
    }
    img {
      width: 100%;
    }
    .author {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .authee {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.2rem;
      font-size: 0.9rem;
      .name {
        font-weight: bolder;
        font-style: italic;
        margin-right: 0.2rem;
      }
      img {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        margin-right: 0.5rem;
      }
    }
  }
`;
export default PostCard;
