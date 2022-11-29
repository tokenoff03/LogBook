import ns from "./News.module.css";
import { Context } from "../../context";
import { useContext } from "react";
import { Navigate } from "react-router-dom";


function Posts(props) {
    let logInfo = JSON.parse(localStorage.getItem("logInfo"));
    let currentUser;
    logInfo.users.forEach((element) => {
        if (element.isAuth) {
            currentUser = element;
        }
    });
  return (
    <div className={ns.Posts}>
      <div className={ns.containerPosts}>
        <img src="user.png" alt="user" />
          <div className={ns.containerPostsDetails}>
              <div className={ns.header}>
                  <h4>{currentUser.login}</h4>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                       className="bi bi-three-dots" viewBox="0 0 16 16" onClick={() => {}}>
                      <path
                          d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                  </svg>
              </div>
            <div className={ns.message}>{props.message}</div>
          </div>
      </div>
    </div>
  );
}

export default Posts;
