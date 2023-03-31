import {Container, Nav, Navbar} from 'react-bootstrap';
import React, { useEffect, useState, useContext } from "react";
import AuthContext from "../context/authentication.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const Layout = () => {
  const [error, setError] = useState("");

  const auth = useContext(AuthContext);

  console.log(auth);

  useEffect(() => {
      if (error) {
          window.alert(error);
      }
  }, [error]);

  const handleLogout = async (event) => {
      event.preventDefault();
      if (auth.loggedIn) {
          auth.logout();
      } 
      else {
          setError("Not logged in ---- button should not work.");
      }
  };
  const email = window.localStorage.getItem("username");

  return (
    <div>
      <nav class="navbar">
        <ul class="navbar-nav">
          <li class="logo">
            <a href="" class="nav-link"></a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <svg
                width="26"
                height="25"
                viewBox="0 0 26 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.6314"
                  y="1.46118"
                  width="8.75689"
                  height="8.75689"
                  rx="2.58485"
                  stroke="#5598CF"
                  stroke-opacity="0.05"
                  stroke-width="2.1134"
                />
                <rect
                  x="1.6314"
                  y="1.46118"
                  width="8.75689"
                  height="8.75689"
                  rx="2.58485"
                  stroke="#4D4F51"
                  stroke-width="2.1134"
                />
                <rect
                  x="1.6314"
                  y="14.8679"
                  width="8.75689"
                  height="8.75689"
                  rx="2.58485"
                  stroke="#5598CF"
                  stroke-opacity="0.05"
                  stroke-width="2.1134"
                />
                <rect
                  x="1.6314"
                  y="14.8679"
                  width="8.75689"
                  height="8.75689"
                  rx="2.58485"
                  stroke="#4D4F51"
                  stroke-width="2.1134"
                />
                <rect
                  x="15.5015"
                  y="1.46118"
                  width="8.75689"
                  height="8.75689"
                  rx="4.37845"
                  stroke="#5598CF"
                  stroke-opacity="0.05"
                  stroke-width="2.1134"
                />
                <rect
                  x="15.5015"
                  y="1.46118"
                  width="8.75689"
                  height="8.75689"
                  rx="4.37845"
                  stroke="#4D4F51"
                  stroke-width="2.1134"
                />
                <rect
                  x="15.5015"
                  y="14.8679"
                  width="8.75689"
                  height="8.75689"
                  rx="2.58485"
                  stroke="#5598CF"
                  stroke-opacity="0.05"
                  stroke-width="2.1134"
                />
                <rect
                  x="15.5015"
                  y="14.8679"
                  width="8.75689"
                  height="8.75689"
                  rx="2.58485"
                  stroke="#4D4F51"
                  stroke-width="2.1134"
                />
              </svg>
              <span class="link-text">Home</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <svg
                width="23"
                height="25"
                viewBox="0 0 23 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5465 17.6012L12.2119 18.6035L12.5465 17.6012C12.0038 17.4201 11.4194 17.4201 10.8768 17.6012C10.4922 17.7295 10.1892 17.9523 9.92733 18.1849C9.68111 18.4035 9.40723 18.6906 9.09999 19.0126L9.07271 19.0412C7.6272 20.5563 6.59289 21.6388 5.76815 22.361C4.91238 23.1103 4.47725 23.288 4.23758 23.3055C3.55648 23.3554 2.87772 23.069 2.40946 22.5045C2.22972 22.2879 2.04056 21.809 1.94099 20.6451C1.84462 19.5187 1.84369 17.9825 1.84369 15.8416V10.4608C1.84369 7.98804 1.84573 6.23497 2.01622 4.90593C2.18343 3.6024 2.49606 2.86764 3.00047 2.33897C3.49821 1.81728 4.1796 1.49907 5.40023 1.32707C6.65655 1.15004 8.31768 1.14758 10.681 1.14758H12.7422C15.1056 1.14758 16.7667 1.15004 18.023 1.32707C19.2436 1.49907 19.925 1.81728 20.4228 2.33897C20.9272 2.86764 21.2398 3.6024 21.407 4.90593C21.5775 6.23497 21.5796 7.98804 21.5796 10.4608V15.8416C21.5796 17.9825 21.5786 19.5187 21.4822 20.6451C21.3827 21.809 21.1935 22.2879 21.0138 22.5045C20.5455 23.069 19.8668 23.3554 19.1857 23.3055C18.946 23.288 18.5109 23.1103 17.6551 22.361C16.8303 21.6388 15.796 20.5563 14.3505 19.0412L14.3233 19.0127C14.016 18.6906 13.7421 18.4035 13.4959 18.1849C13.234 17.9523 12.931 17.7295 12.5465 17.6012Z"
                  stroke="#5598CF"
                  stroke-opacity="0.05"
                  stroke-width="2.1134"
                />
                <path
                  d="M12.5465 17.6012L12.2119 18.6035L12.5465 17.6012C12.0038 17.4201 11.4194 17.4201 10.8768 17.6012C10.4922 17.7295 10.1892 17.9523 9.92733 18.1849C9.68111 18.4035 9.40723 18.6906 9.09999 19.0126L9.07271 19.0412C7.6272 20.5563 6.59289 21.6388 5.76815 22.361C4.91238 23.1103 4.47725 23.288 4.23758 23.3055C3.55648 23.3554 2.87772 23.069 2.40946 22.5045C2.22972 22.2879 2.04056 21.809 1.94099 20.6451C1.84462 19.5187 1.84369 17.9825 1.84369 15.8416V10.4608C1.84369 7.98804 1.84573 6.23497 2.01622 4.90593C2.18343 3.6024 2.49606 2.86764 3.00047 2.33897C3.49821 1.81728 4.1796 1.49907 5.40023 1.32707C6.65655 1.15004 8.31768 1.14758 10.681 1.14758H12.7422C15.1056 1.14758 16.7667 1.15004 18.023 1.32707C19.2436 1.49907 19.925 1.81728 20.4228 2.33897C20.9272 2.86764 21.2398 3.6024 21.407 4.90593C21.5775 6.23497 21.5796 7.98804 21.5796 10.4608V15.8416C21.5796 17.9825 21.5786 19.5187 21.4822 20.6451C21.3827 21.809 21.1935 22.2879 21.0138 22.5045C20.5455 23.069 19.8668 23.3554 19.1857 23.3055C18.946 23.288 18.5109 23.1103 17.6551 22.361C16.8303 21.6388 15.796 20.5563 14.3505 19.0412L14.3233 19.0127C14.016 18.6906 13.7421 18.4035 13.4959 18.1849C13.234 17.9523 12.931 17.7295 12.5465 17.6012Z"
                  stroke="#4D4F51"
                  stroke-width="2.1134"
                />
              </svg>
              <span class="link-text">My Apartments</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_657_10297)">
                  <path
                    d="M23.0314 8.44523L24.0828 8.33989L23.0314 8.44524C23.0457 8.58879 23.0294 8.80229 22.9515 9.55594C22.9498 9.57275 22.9481 9.58935 22.9464 9.60574C22.9174 9.88545 22.8945 10.1064 22.8967 10.3233C22.9068 11.3058 23.2964 12.2464 23.984 12.9483C24.1358 13.1032 24.3082 13.2432 24.5264 13.4205C24.5392 13.4309 24.5522 13.4414 24.5654 13.4521L25.2319 12.6321L24.5654 13.4521C25.1533 13.93 25.3159 14.0694 25.4072 14.1811C25.9172 14.8046 25.9172 15.7012 25.4072 16.3247C25.3159 16.4364 25.1533 16.5758 24.5654 17.0536C24.5523 17.0643 24.5393 17.0748 24.5265 17.0852C24.3082 17.2625 24.1358 17.4026 23.984 17.5575C23.2964 18.2594 22.9068 19.1999 22.8967 20.1825C22.8945 20.3994 22.9174 20.6203 22.9464 20.9C22.9481 20.9164 22.9498 20.933 22.9515 20.9498C23.0294 21.7035 23.0457 21.917 23.0314 22.0605L24.0828 22.1659L23.0314 22.0606C22.9511 22.8621 22.3171 23.496 21.5156 23.5763L21.6209 24.6277L21.5156 23.5763C21.372 23.5907 21.1585 23.5743 20.4049 23.4965C20.3881 23.4947 20.3715 23.493 20.3551 23.4913C20.0754 23.4624 19.8544 23.4395 19.6375 23.4417C18.655 23.4517 17.7144 23.8413 17.0126 24.529C16.8576 24.6808 16.7176 24.8532 16.5404 25.0713C16.5299 25.0842 16.5194 25.0972 16.5087 25.1103L17.3287 25.7768L16.5087 25.1103C16.0308 25.6983 15.8914 25.8608 15.7797 25.9522C15.1562 26.4622 14.2597 26.4622 13.6361 25.9522C13.5244 25.8608 13.3851 25.6983 12.9072 25.1103C12.8965 25.0972 12.886 25.0842 12.8756 25.0714C12.6983 24.8532 12.5583 24.6808 12.4033 24.529C11.7015 23.8413 10.7609 23.4517 9.77835 23.4417C9.56143 23.4395 9.3405 23.4624 9.06079 23.4913C9.0444 23.493 9.0278 23.4947 9.01099 23.4965C8.25733 23.5743 8.04384 23.5907 7.90028 23.5763L7.79494 24.6277L7.90028 23.5763C7.09875 23.496 6.46481 22.8621 6.38451 22.0605C6.37013 21.917 6.38652 21.7035 6.46435 20.9498C6.46609 20.933 6.46781 20.9163 6.46951 20.8999C6.49847 20.6203 6.52135 20.3994 6.51913 20.1825C6.50909 19.1999 6.11949 18.2594 5.43184 17.5575C5.28003 17.4026 5.10765 17.2625 4.88943 17.0853C4.87661 17.0749 4.86363 17.0643 4.85049 17.0536C4.26254 16.5758 4.09998 16.4364 4.00864 16.3247C3.49866 15.7012 3.49866 14.8046 4.00864 14.1811C4.09998 14.0694 4.26254 13.93 4.85049 13.4521C4.86363 13.4415 4.87661 13.4309 4.88943 13.4205C5.10765 13.2432 5.28003 13.1032 5.43184 12.9483C6.11949 12.2464 6.50909 11.3058 6.51913 10.3233C6.52135 10.1064 6.49847 9.88551 6.46951 9.60586C6.46781 9.58943 6.46609 9.57279 6.46435 9.55595C6.38652 8.80229 6.37013 8.58879 6.38451 8.44523C6.46481 7.64371 7.09875 7.00976 7.90028 6.92946C8.04383 6.91508 8.25733 6.93147 9.01099 7.0093C9.02784 7.01104 9.04447 7.01276 9.0609 7.01446C9.34055 7.04342 9.56146 7.0663 9.77835 7.06409C10.7609 7.05405 11.7015 6.66444 12.4033 5.97679C12.5583 5.82498 12.6983 5.6526 12.8756 5.43436C12.886 5.42155 12.8965 5.40858 12.9072 5.39544C13.3851 4.80749 13.5245 4.64493 13.6361 4.5536C14.2597 4.04361 15.1562 4.04361 15.7797 4.5536C15.8914 4.64493 16.0308 4.80749 16.5087 5.39544C16.5194 5.40858 16.5299 5.42156 16.5403 5.43438C16.7176 5.65261 16.8576 5.82499 17.0126 5.97679C17.7144 6.66444 18.655 7.05405 19.6375 7.06409C19.8544 7.0663 20.0753 7.04342 20.355 7.01446C20.3714 7.01276 20.388 7.01104 20.4049 7.0093C21.1585 6.93147 21.372 6.91508 21.5156 6.92946C22.3171 7.00976 22.9511 7.64371 23.0314 8.44523Z"
                    stroke="#5598CF"
                    stroke-opacity="0.06"
                    stroke-width="2.1134"
                  />
                  <path
                    d="M23.0314 8.44523L24.0828 8.33989L23.0314 8.44524C23.0457 8.58879 23.0294 8.80229 22.9515 9.55594C22.9498 9.57275 22.9481 9.58935 22.9464 9.60574C22.9174 9.88545 22.8945 10.1064 22.8967 10.3233C22.9068 11.3058 23.2964 12.2464 23.984 12.9483C24.1358 13.1032 24.3082 13.2432 24.5264 13.4205C24.5392 13.4309 24.5522 13.4414 24.5654 13.4521L25.2319 12.6321L24.5654 13.4521C25.1533 13.93 25.3159 14.0694 25.4072 14.1811C25.9172 14.8046 25.9172 15.7012 25.4072 16.3247C25.3159 16.4364 25.1533 16.5758 24.5654 17.0536C24.5523 17.0643 24.5393 17.0748 24.5265 17.0852C24.3082 17.2625 24.1358 17.4026 23.984 17.5575C23.2964 18.2594 22.9068 19.1999 22.8967 20.1825C22.8945 20.3994 22.9174 20.6203 22.9464 20.9C22.9481 20.9164 22.9498 20.933 22.9515 20.9498C23.0294 21.7035 23.0457 21.917 23.0314 22.0605L24.0828 22.1659L23.0314 22.0606C22.9511 22.8621 22.3171 23.496 21.5156 23.5763L21.6209 24.6277L21.5156 23.5763C21.372 23.5907 21.1585 23.5743 20.4049 23.4965C20.3881 23.4947 20.3715 23.493 20.3551 23.4913C20.0754 23.4624 19.8544 23.4395 19.6375 23.4417C18.655 23.4517 17.7144 23.8413 17.0126 24.529C16.8576 24.6808 16.7176 24.8532 16.5404 25.0713C16.5299 25.0842 16.5194 25.0972 16.5087 25.1103L17.3287 25.7768L16.5087 25.1103C16.0308 25.6983 15.8914 25.8608 15.7797 25.9522C15.1562 26.4622 14.2597 26.4622 13.6361 25.9522C13.5244 25.8608 13.3851 25.6983 12.9072 25.1103C12.8965 25.0972 12.886 25.0842 12.8756 25.0714C12.6983 24.8532 12.5583 24.6808 12.4033 24.529C11.7015 23.8413 10.7609 23.4517 9.77835 23.4417C9.56143 23.4395 9.3405 23.4624 9.06079 23.4913C9.0444 23.493 9.0278 23.4947 9.01099 23.4965C8.25733 23.5743 8.04384 23.5907 7.90028 23.5763L7.79494 24.6277L7.90028 23.5763C7.09875 23.496 6.46481 22.8621 6.38451 22.0605C6.37013 21.917 6.38652 21.7035 6.46435 20.9498C6.46609 20.933 6.46781 20.9163 6.46951 20.8999C6.49847 20.6203 6.52135 20.3994 6.51913 20.1825C6.50909 19.1999 6.11949 18.2594 5.43184 17.5575C5.28003 17.4026 5.10765 17.2625 4.88943 17.0853C4.87661 17.0749 4.86363 17.0643 4.85049 17.0536C4.26254 16.5758 4.09998 16.4364 4.00864 16.3247C3.49866 15.7012 3.49866 14.8046 4.00864 14.1811C4.09998 14.0694 4.26254 13.93 4.85049 13.4521C4.86363 13.4415 4.87661 13.4309 4.88943 13.4205C5.10765 13.2432 5.28003 13.1032 5.43184 12.9483C6.11949 12.2464 6.50909 11.3058 6.51913 10.3233C6.52135 10.1064 6.49847 9.88551 6.46951 9.60586C6.46781 9.58943 6.46609 9.57279 6.46435 9.55595C6.38652 8.80229 6.37013 8.58879 6.38451 8.44523C6.46481 7.64371 7.09875 7.00976 7.90028 6.92946C8.04383 6.91508 8.25733 6.93147 9.01099 7.0093C9.02784 7.01104 9.04447 7.01276 9.0609 7.01446C9.34055 7.04342 9.56146 7.0663 9.77835 7.06409C10.7609 7.05405 11.7015 6.66444 12.4033 5.97679C12.5583 5.82498 12.6983 5.6526 12.8756 5.43436C12.886 5.42155 12.8965 5.40858 12.9072 5.39544C13.3851 4.80749 13.5245 4.64493 13.6361 4.5536C14.2597 4.04361 15.1562 4.04361 15.7797 4.5536C15.8914 4.64493 16.0308 4.80749 16.5087 5.39544C16.5194 5.40858 16.5299 5.42156 16.5403 5.43438C16.7176 5.65261 16.8576 5.82499 17.0126 5.97679C17.7144 6.66444 18.655 7.05405 19.6375 7.06409C19.8544 7.0663 20.0753 7.04342 20.355 7.01446C20.3714 7.01276 20.388 7.01104 20.4049 7.0093C21.1585 6.93147 21.372 6.91508 21.5156 6.92946C22.3171 7.00976 22.9511 7.64371 23.0314 8.44523Z"
                    stroke="#4D4F51"
                    stroke-width="2.1134"
                  />
                  <g opacity="0.9">
                    <rect
                      x="9.73746"
                      y="14.5018"
                      width="1.50214"
                      height="1.50214"
                      rx="0.751068"
                      stroke="#4D4F51"
                      stroke-width="1.50214"
                    />
                    <rect
                      x="13.9557"
                      y="14.5018"
                      width="1.50214"
                      height="1.50214"
                      rx="0.751068"
                      stroke="#4D4F51"
                      stroke-width="1.50214"
                    />
                    <rect
                      x="18.1739"
                      y="14.5018"
                      width="1.50214"
                      height="1.50214"
                      rx="0.751068"
                      stroke="#4D4F51"
                      stroke-width="1.50214"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_657_10297">
                    <rect
                      width="29.1323"
                      height="29.1323"
                      fill="white"
                      transform="translate(0.144409 0.686646)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span class="link-text">Sign in</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <FontAwesomeIcon icon={faBars} />
              <span class="link-text">Login</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Layout;
