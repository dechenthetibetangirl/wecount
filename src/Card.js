import React from 'react';
import {AiOutlineCheckCircle} from 'react-icons/ai'
import {FaGgCircle} from 'react-icons/fa'
import {BiSolidCommentDots} from 'react-icons/bi'
import Avatar from 'react-avatar';
import './Card.css';

function Card() {
  return (
    <div className="card">
      <div className="card-body">
      <div className="label">User Interface</div>
        <h2 className="card-title">Service Page Website</h2>
        <p className="card-text">Make a page display about services for <br/> websites company with blue and red colors</p>
        <div className="card-content">
          <div className="icon-container">
            <AiOutlineCheckCircle className="check-icon"/>
          </div>
          <p className="card-text">0/20</p>
          <div className="avatar-profile">
          <Avatar googleId="118096717852922241760" size="30" round="20px"  />
          <Avatar facebookId="100008343750912" size="30"round="20px" />
          <Avatar githubHandle="sitebase" size="30" round="20px" />
          </div>
          <button className="btn invite-btn">Invite</button>
        </div>
        <div className="attachment-comment-box">
            <div className="box-side">
              <FaGgCircle/> 4 Attachment</div>
            <div className="divider-line"> </div>
            <div className="box-side"><BiSolidCommentDots/>10 Comment</div>
        </div>
        </div>
    </div>
  );
}

export default Card;
