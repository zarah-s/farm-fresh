import React from "react";

const ContactItem = ({ text }) => {
  return (
    <li>
      <a
        //   href="https://discord.gg/4eeurUVvTy"
        className="hover:underline"
      >
        {text}
      </a>
    </li>
  );
};

export default ContactItem;
