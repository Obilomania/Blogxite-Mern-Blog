import React from "react";
import MainLayout from "../../components/MainLayout";
import styled from "styled-components";
import Side from "./Side";
import Comment from "../../components/Post-Comment/Comment";

let PostImage = require("../../assets/postImages/three.png");
const PostDetail = () => {
  return (
    <MainLayout>
      <Detail>
        <div className="postDetail">
          <div className="direction">
            <p>Home / Post / Post-Title</p>
          </div>
          <div className="postImage">
            <img src={PostImage} alt="postPics" />
          </div>
          <div className="content">
            <div className="tag">
              <p>TECHNOLOGY</p>
            </div>
            <div className="postTitle">
              <p>Into the world of tech and Developers</p>
            </div>
            <div className="postDesc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
              molestias mollitia repellat itaque doloremque veniam, distinctio
              voluptate, tenetur dolores nihil dolor excepturi. Sapiente quas ab
              omnis sunt fuga officiis porro fugit, reprehenderit, odit ad animi
              laboriosam quis culpa molestiae eligendi incidunt quo voluptates
              laborum nostrum distinctio? Alias vero omnis neque nostrum culpa
              in accusantium accusamus obcaecati, et placeat, similique
              voluptate illum, molestiae eaque explicabo ad hic officia minima
              nisi. Possimus commodi iste necessitatibus aperiam numquam
              deserunt harum, et unde qui, ullam ipsum magni illo, alias impedit
              repudiandae? Reiciendis placeat optio esse ipsam deserunt
              exercitationem natus sunt aspernatur iure, nihil eaque ipsum
              rerum! Enim, eum magnam recusandae vitae voluptatem accusamus
              sapiente ullam non nostrum aperiam, voluptate inventore maiores
              quisquam autem accusantium sit suscipit incidunt quam magni totam
              dolor commodi impedit, aut delectus! Vero, minus velit mollitia
              consequatur aliquam atque eius, libero itaque explicabo, sunt
              saepe quis tempora. Officia autem dicta assumenda ad accusamus non
              animi illum, molestiae dolorum natus? Repellendus doloremque
              sapiente itaque nemo corrupti, laborum maiores blanditiis, iure
              consectetur hic, vitae ipsa ut quas fugiat quibusdam iusto
              laboriosam porro? Deleniti, ad neque repudiandae fugit eius enim
              officiis aliquid tempora quisquam consequatur consequuntur velit
              qui commodi sunt excepturi ipsum, quaerat earum assumenda non
              alias. Aliquid, dolor ipsam! Dolor, non veniam. Iste incidunt in
              tenetur ad facere! Eaque temporibus commodi voluptatem voluptates?
              Ratione asperiores quod nesciunt. Recusandae perspiciatis rerum
              magni ipsum adipisci dolorum consequuntur necessitatibus? Fugit
              cupiditate nemo atque. Molestias, inventore velit. Nobis ducimus
              velit libero natus saepe quae repellendus pariatur. Eum illo
              aliquid sint. Molestiae dolor laboriosam neque placeat illo
              dignissimos ducimus officiis omnis possimus. Ex, reprehenderit!
              Neque adipisci, saepe eaque voluptate dignissimos molestiae fuga
              quibusdam nesciunt nobis cumque eveniet, blanditiis explicabo
              facilis culpa nisi modi maxime delectus suscipit? Consectetur
              porro nostrum repellendus ducimus provident rem, possimus error?
              Nulla, beatae sunt?
            </div>
          </div>
          <form>
            <div className="formContent">
              <textarea placeholder="Leave a comment here..."></textarea>
              <div className="send">
                <input type="submit" value="Send" />
              </div>
            </div>
          </form>
          <div className="comment">
            <div className="commentAmount">
              <p className="font-bold text-dark">All Comments (2)</p>
            </div>
            <div className="commentSection">
              <Comment />
              <Comment />
            </div>
          </div>
        </div>
        <Side />
      </Detail>
    </MainLayout>
  );
};

const Detail = styled.div`
  display: flex;
  align-items: start;
  justify-content: flex-start;
  gap: 5%;
  width: 100%;
  min-height: 90vh;
  padding: 2rem 10rem;
  .postDetail {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    .direction {
      color: #1565d8;
    }
    .postImage {
      width: 100%;
      img {
        width: 100%;
        margin: auto;
        border-radius: 1rem;
        box-shadow: rgba(21, 101, 216, 0.3) 0px 9px 20px;
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 0.7rem;
      .tag {
        color: #1565d8;
        letter-spacing: 4px;
        font-weight: 600;
      }
      .postTitle {
        font-size: 1.4rem;
        font-weight: bolder;
      }
      .postDesc {
        color: grey;
        text-align: justify;
      }
    }
    .formContent {
      width: 100%;
      position: relative;
      display: flex;
      align-items: end;
      justify-content: center;
      flex-direction:column;
      gap:.6rem;
      textarea {
        border: 1px solid #1565d8;
        width: 100%;
        height: 7rem;
        padding: 1rem;
        border-radius: 0.5rem;
        resize: none;
        &::placeholder {
          font-size: 0.8rem;
        }
        &:focus {
          outline: none !important;
          border: 1px solid #1565d8;
        }
      }
      .send {
        /* position: absolute; */
        bottom: 1rem;
        right: 0;
        /* padding: 0 3rem 0 0; */
        input {
          background: #1565d8;
          color: white;
          padding: 0.5rem 3rem;
          border-radius: 0.5rem;
          font-size: 0.8rem;
          cursor: pointer;
          transition: 400ms all ease;
          &:hover {
            background: #3e89f3;
            color: white;
          }
        }
      }
    }
    .comment {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      gap: 1rem;
      .commentSection {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        gap: 1rem;
      }
    }
  }

  @media screen and (max-width: 1200px) {
    display: flex;
    align-items: start;
    justify-content: flex-start;
    gap: 1.5rem;
    width: 100%;
    min-height: 90vh;
    padding: 1rem;
    flex-direction: column;
    .postDetail {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
      .direction {
        color: #1565d8;
      }
      .postImage {
        width: 100%;
        img {
          width: 100%;
          margin: auto;
          border-radius: 1rem;
          box-shadow: rgba(21, 101, 216, 0.3) 0px 9px 20px;
        }
      }
      .content {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 0.1rem;
        .tag {
          color: #1565d8;
          letter-spacing: 4px;
          font-weight: 600;
        }
        .postTitle {
          font-size: 1.4rem;
          font-weight: bolder;
          line-height: 1.6rem;
        }
        .postDesc {
          color: grey;
          text-align: justify;
          font-size: 0.8rem;
        }
      }
      .formContent {
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        textarea {
          border: 1px solid #1565d8;
          width: 100%;
          height: 7rem;
          padding: 0.8rem;
          font-size: 0.8rem;
          border-radius: 0.5rem;
          resize: none;
          &::placeholder {
            font-size: 0.8rem;
          }
          &:focus {
            outline: none !important;
            border: 1px solid #1565d8;
          }
        }
        .send {
          position: absolute;
          bottom: 0.5rem;
          right: 0;
          padding: 0 0.5rem 0 0;
          input {
            background: #1565d8;
            color: white;
            padding: 0.3rem 1rem;
            border-radius: 0.5rem;
            font-size: 0.8rem;
            cursor: pointer;
            transition: 400ms all ease;
            &:hover {
              background: #3e89f3;
              color: white;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    display: flex;
    align-items: start;
    justify-content: flex-start;
    gap: 1.5rem;
    width: 100%;
    min-height: 90vh;
    padding: 1rem;
    flex-direction: column;
    .postDetail {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
      .direction {
        color: #1565d8;
      }
      .postImage {
        width: 100%;
        img {
          width: 100%;
          margin: auto;
          border-radius: 1rem;
          box-shadow: rgba(21, 101, 216, 0.3) 0px 9px 20px;
        }
      }
      .content {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 0.1rem;
        .tag {
          color: #1565d8;
          letter-spacing: 4px;
          font-weight: 600;
        }
        .postTitle {
          font-size: 1.4rem;
          font-weight: bolder;
          line-height: 1.6rem;
        }
        .postDesc {
          color: grey;
          text-align: justify;
          font-size: 0.8rem;
        }
      }
      .formContent {
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        textarea {
          border: 1px solid #1565d8;
          width: 100%;
          height: 7rem;
          padding: 0.8rem;
          font-size: 0.8rem;
          border-radius: 0.5rem;
          resize: none;
          &::placeholder {
            font-size: 0.8rem;
          }
          &:focus {
            outline: none !important;
            border: 1px solid #1565d8;
          }
        }
        .send {
          position: absolute;
          bottom: 0.5rem;
          right: 0;
          padding: 0 0.5rem 0 0;
          input {
            background: #1565d8;
            color: white;
            padding: 0.3rem 1rem;
            border-radius: 0.5rem;
            font-size: 0.8rem;
            cursor: pointer;
            transition: 400ms all ease;
            &:hover {
              background: #3e89f3;
              color: white;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 640px) {
    display: flex;
    align-items: start;
    justify-content: flex-start;
    gap: 1.5rem;
    width: 100%;
    min-height: 90vh;
    padding: 1rem;
    flex-direction: column;
    .postDetail {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
      .direction {
        color: #1565d8;
      }
      .postImage {
        width: 100%;
        img {
          width: 100%;
          margin: auto;
          border-radius: 1rem;
          box-shadow: rgba(21, 101, 216, 0.3) 0px 9px 20px;
        }
      }
      .content {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 0.1rem;
        .tag {
          color: #1565d8;
          letter-spacing: 4px;
          font-weight: 600;
        }
        .postTitle {
          font-size: 1.4rem;
          font-weight: bolder;
          line-height: 1.6rem;
        }
        .postDesc {
          color: grey;
          text-align: justify;
          font-size: 0.8rem;
        }
      }
      .formContent {
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        textarea {
          border: 1px solid #1565d8;
          width: 100%;
          height: 7rem;
          padding: 0.8rem;
          font-size: 0.8rem;
          border-radius: 0.5rem;
          resize: none;
          &::placeholder {
            font-size: 0.8rem;
          }
          &:focus {
            outline: none !important;
            border: 1px solid #1565d8;
          }
        }
        .send {
          position: absolute;
          bottom: 0.5rem;
          right: 0;
          padding: 0 0.5rem 0 0;
          input {
            background: #1565d8;
            color: white;
            padding: 0.3rem 1rem;
            border-radius: 0.5rem;
            font-size: 0.8rem;
            cursor: pointer;
            transition: 400ms all ease;
            &:hover {
              background: #3e89f3;
              color: white;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 450px) {
    display: flex;
    align-items: start;
    justify-content: flex-start;
    gap: 1.5rem;
    width: 100%;
    min-height: 90vh;
    padding: 1rem;
    flex-direction: column;
    .postDetail {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
      .direction {
        color: #1565d8;
      }
      .postImage {
        width: 100%;
        img {
          width: 100%;
          margin: auto;
          border-radius: 1rem;
          box-shadow: rgba(21, 101, 216, 0.3) 0px 9px 20px;
        }
      }
      .content {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 0.1rem;
        .tag {
          color: #1565d8;
          letter-spacing: 4px;
          font-weight: 600;
        }
        .postTitle {
          font-size: 1.4rem;
          font-weight: bolder;
          line-height: 1.6rem;
        }
        .postDesc {
          color: grey;
          text-align: justify;
          font-size: 0.8rem;
        }
      }
      .formContent {
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        textarea {
          border: 1px solid #1565d8;
          width: 100%;
          height: 7rem;
          padding: 0.8rem;
          font-size: 0.8rem;
          border-radius: 0.5rem;
          resize: none;
          &::placeholder {
            font-size: 0.8rem;
          }
          &:focus {
            outline: none !important;
            border: 1px solid #1565d8;
          }
        }
        .send {
          position: absolute;
          bottom: 0.5rem;
          right: 0;
          padding: 0 0.5rem 0 0;
          input {
            background: #1565d8;
            color: white;
            padding: 0.3rem 1rem;
            border-radius: 0.5rem;
            font-size: 0.8rem;
            cursor: pointer;
            transition: 400ms all ease;
            &:hover {
              background: #3e89f3;
              color: white;
            }
          }
        }
      }
    }
  }
`;
export default PostDetail;
