import React from 'react'

import { Helmet } from 'react-helmet'

import './profile.css'

const Profile = (props) => {
  return (
    <div className="profile-container1">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="profile-profile">
        <div className="profile-navigation-rail">
          <div className="profile-menu-fab">
            <button
                className="profile-iconbutton"
                onClick={() => alert('Button clicked!')}
            >
              <div className="profile-content1">
                <div className="profile-statelayer1">
                  <img
                    src="/iconi343-wk4r.svg"
                    alt="IconI343"
                    className="profile-icon10"
                  />
                </div>
              </div>
            </button>
          </div>
          <div className="profile-segments">
            <div className="profile-navitem01">
              <div className="profile-iconcontainer1">
                <div className="profile-statelayer2">
                  <img
                    src="/iconi343-5i6.svg"
                    alt="IconI343"
                    className="profile-icon11"
                  />
                </div>
              </div>
              <span className="profile-text10 M3labelmedium">Filter</span>
            </div>
            <div className="profile-navitem02">
              <div className="profile-iconcontainer2">
                <div className="profile-statelayer3">
                  <img
                    src="/iconi343-y1h.svg"
                    alt="IconI343"
                    className="profile-icon12"
                  />
                </div>
              </div>
              <span className="profile-text11 M3labelmedium">Favorites</span>
            </div>
            <div className="profile-navitem031">
              <div className="profile-iconcontainer3">
                <div className="profile-statelayer4">
                  <img
                    src="/icon3432-ero.svg"
                    alt="Icon3432"
                    className="profile-icon13"
                  />
                </div>
              </div>
              <span className="profile-text12 M3labelmedium">Rated</span>
            </div>
            <div className="profile-navitem032">
              <div className="profile-iconcontainer4">
                <div className="profile-statelayer5">
                  <img
                    src="/icon3432-pxi.svg"
                    alt="Icon3432"
                    className="profile-icon14"
                  />
                </div>
              </div>
              <span className="profile-text13 M3labelmedium">Recommend</span>
            </div>
          </div>
        </div>
        <div className="profile-content2">
          <div className="profile-appbar">
            <div className="profile-leadingicon">
              <div className="profile-content3">
                <div className="profile-statelayer6">
                  <img
                    src="/iconi343-iz17.svg"
                    alt="IconI343"
                    className="profile-icon15"
                  />
                </div>
              </div>
            </div>
            <div className="profile-textcontent">
              <span className="profile-text14 M3titlelarge">User Profile</span>
            </div>
            <div className="profile-trailingelements">
              <div className="profile-trailingaction1">
                <div className="profile-content4">
                  <div className="profile-statelayer7">
                    <img
                      src="/iconi343-woze.svg"
                      alt="IconI343"
                      className="profile-icon16"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-header">
            <button className="profile-button"></button>
            <span className="profile-text15 M3headlinesmall">
              User’s Reviews
            </span>
            <img
              src="/ellipse13434-kss3-200h.png"
              alt="Ellipse13434"
              className="profile-ellipse1"
            />
            <div className="profile-textcolumn">
              <div className="profile-headline-supportingtext">
                <span className="profile-text16 M3headlinesmall">Username</span>
                <span className="profile-text17 M3labelsmall">Date joined</span>
                <span className="profile-text18 M3bodymedium">
                  <span>User Bio (if applicable)</span>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <span>Edit Bio (if User is You)</span>
                </span>
              </div>
            </div>
          </div>
          <div className="profile-simplecardgrid">
            <div className="profile-titleheader">
              <span className="profile-text25 M3headlinesmall">
                Recently Rated
              </span>
              <button className="profile-iconbuttonstandard">
                <div className="profile-content5">
                  <div className="profile-statelayer8">
                    <img
                      src="/iconi343-cu5.svg"
                      alt="IconI343"
                      className="profile-icon17"
                    />
                  </div>
                </div>
              </button>
            </div>
            <div className="profile-column01">
              <div className="profile-listitem01">
                <div className="profile-textandimage1">
                  <div className="profile-image1"></div>
                  <div className="profile-content6">
                    <div className="profile-titledescription1">
                      <span className="profile-text26 M3titlelarge">Title</span>
                      <span className="profile-text27 M3bodymedium">
                        Description duis aute irure dolor in reprehenderit in
                        voluptate velit.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="profile-listitem02"></div>
              <div className="profile-listitem03">
                <div className="profile-textandimage2">
                  <div className="profile-image2"></div>
                  <div className="profile-content7">
                    <div className="profile-titledescription2">
                      <span className="profile-text28 M3titlelarge">Title</span>
                      <span className="profile-text29 M3bodymedium">
                        Description duis aute irure dolor in reprehenderit in
                        voluptate velit.
                      </span>
                    </div>
                    <div className="profile-leading-trailingicons">
                      <div className="profile-leading">
                        <span className="profile-text30 M3bodysmall">
                          Today
                        </span>
                        <span className="profile-text31 M3bodysmall">
                          23 min
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-chromebrowserbar">
          <div className="profile-icons">
            <img
              src="/back3433-enpi.svg"
              alt="back3433"
              className="profile-back"
            />
            <img
              src="/forward3433-c33dk.svg"
              alt="forward3433"
              className="profile-forward"
            />
            <img
              src="/refresh3433-4zd.svg"
              alt="refresh3433"
              className="profile-refresh"
            />
          </div>
          <div className="profile-address-bar">
            <div className="profile-url">
              <img
                src="/lock3433-n9eq.svg"
                alt="lock3433"
                className="profile-lock"
              />
              <span className="profile-text32 M3bodylarge">www.url.com</span>
            </div>
            <img
              src="/star3433-5kq3.svg"
              alt="star3433"
              className="profile-star"
            />
          </div>
          <div className="profile-avatar"></div>
          <img
            src="/more3433-g98.svg"
            alt="more3433"
            className="profile-more"
          />
        </div>
      </div>
      <a href="https://play.teleporthq.io/signup" className="profile-link">
        <div aria-label="Sign up to TeleportHQ" className="profile-container2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="profile-icon18"
          >
            <path
              d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
              fill="#B23ADE"
            ></path>
            <path
              d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
              fill="#FF5C5C"
            ></path>
            <path
              d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
              fill="#2874DE"
            ></path>
          </svg>
          <span className="profile-text33">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Profile