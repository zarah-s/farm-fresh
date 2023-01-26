import React from "react";

const ContactItem = ({ text }) => {
  return (
    <li>
      <a className="hover:underline">{text}</a>
    </li>
  );
};

export default ContactItem;
