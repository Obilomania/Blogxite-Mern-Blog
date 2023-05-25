import React from "react";
import { Link } from "react-router-dom";
import PostCard from "../../components/PostCard";
import styled from "styled-components";
import { IoArrowForward } from "react-icons/io5";

const Post = () => {
  return (
    <PostSection>
      {/* <div className="post">
        <h3 className="text-4xl text-primary flex items-center justify-center mb-12">
          Posts
        </h3>
        <span className=""></span>
      </div> */}
      <div className="postCard">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
      <div className="morePost">
        <Link to="/">
          More Articles <IoArrowForward />
        </Link>
      </div>
    </PostSection>
  );
};

const PostSection = styled.div`
  width: 100%;
  padding: 5rem 10rem;
  .post {
    width: 100%;
    h3 {
      font-weight: bolder;
    }
    span {
      width: 4rem;
      height: 0.2rem;
      background: #011736;
    }
  }
  .postCard {
    display: flex;
    flex-wrap: wrap;
    align-items: start;
    justify-content: space-between;
    gap: 5.3rem;
  }
  .morePost a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    border: 2px solid #1565D8;
    color:#1565D8;
    border-radius: 0.7rem;
    width: fit-content;
    font-weight: 600;
    margin: auto;
    padding: 0.5rem 3rem;
    margin-top: 3.5rem;
    transition: 300ms all ease-in-out;
    &:hover {
      font-weight: bolder;
      border: 3px solid #1565D8;
      color:#1565D8;
      transition: 300ms all ease-in-out;
    }
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    padding: 5rem 10rem;
    .post {
      width: 100%;
      h3 {
        font-weight: bolder;
      }
      span {
        width: 4rem;
        height: 0.2rem;
        background: #011736;
      }
    }
    .postCard {
      /* width:100%; */
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-evenly;
      margin: auto;
      gap: 3rem;
    }
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 1rem;
    .post {
      width: 100%;
      h3 {
        font-weight: bolder;
      }
      span {
        width: 4rem;
        height: 0.2rem;
        background: #011736;
      }
    }
    .postCard {
      /* width:100%; */
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-evenly;
      margin: auto;
      gap: 3rem;
    }
  }
  @media screen and (max-width: 640px) {
    width: 100%;
    padding: 1rem;
    .post {
      width: 100%;
      h3 {
        font-weight: bolder;
      }
      span {
        width: 4rem;
        height: 0.2rem;
        background: #011736;
      }
    }
    .postCard {
      /* width:100%; */
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-evenly;
      margin: auto;
      gap: 3rem;
    }
  }
  @media screen and (max-width: 450px) {
    width: 100%;
    padding: 1rem;
    .post {
      width: 100%;
      h3 {
        font-weight: bolder;
      }
      span {
        width: 4rem;
        height: 0.2rem;
        background: #011736;
      }
    }
    .postCard {
      /* width:100%; */
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-evenly;
      margin: auto;
      gap: 2rem;
    }
  }
`;
export default Post;
