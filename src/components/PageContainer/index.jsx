import React, { useState } from "react";
import "./pageContainer.css";
import { withRouter } from "react-router-dom";
import { ReactComponent as Bell } from "../../assets/icons/bell.svg";

const PageContainer = ({ children, navOptions, history }) => {
  const notifications = [
    {
      id: 96,
      user_id: "2",
      title: "Welcome",
      body: "Welcome to Bitcart, your fastest crypto exchange",
      viewed: 1,
      type: "success",
      created_at: "22nd April, 2020",
    },
  ];
  const [open, toggleOpen] = useState(false);
  const title = navOptions.map((item) => {
    if (item.path === history.location.pathname) return item.name;
  });
  return (
    <div className="content">
      <div className="header">
        <h1 className="content-title">{title}</h1>
        <Bell
          style={{
            cursor: "pointer",
            position: "absolute",
            top: "43px",
            right: 0,
          }}
          onClick={() => toggleOpen(!open)}
        />
        <div className="new-notification"></div>
        {open && (
          <div className="notifications-container">
            <div className="notification-header">
              Notifications<h1></h1>
            </div>
            {!notifications ? (
              <h2
                style={{
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                You have no unread notifications
              </h2>
            ) : (
              notifications.map((item) => (
                <div className="notification">
                  <div className="notif-title">{item.title}</div>
                  <div className="notif-body">{item.body}</div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
      <div className="page">{children}</div>
    </div>
  );
};
export default withRouter(PageContainer);
