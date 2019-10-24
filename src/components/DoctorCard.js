import React from 'react';
import { Link } from 'gatsby';

const DoctorCard = (props) => {
  return (
    <div className="doctor">
      <div className="image-box">
        <img src={props.img} alt="" />
      </div>
      <div className="name">{props.name}</div>
      <Link className="doctor-link" to={props.linkTo}>Conoce más</Link>
    </div>
  )
}

export default DoctorCard;