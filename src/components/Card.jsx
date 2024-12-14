// Icons Import
import { RiDeleteBinLine, RiEdit2Fill } from "react-icons/ri";

import { FaPhoneFlip } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";
const Card = ({ contact, handleDelete, handleEdit }) => {
  // kişi İsimlerini ad ve soy ad ın ilk harflerini aldım.
  const [name, surname] = contact.name.split(" ");

  return (
    <div className="card">
      <div className="buttons">
        <button onClick={() => handleEdit(contact)}>
          <RiEdit2Fill />
        </button>
        <button onClick={() => handleDelete(contact.id)}>
          <RiDeleteBinLine />
        </button>
      </div>
      {/* Profile */}
      <h1>
        {name[0]} {surname[0]}
        {/*  */}
      </h1>
      {/* Name */}
      <h3>{contact.name}</h3>
      {/* Position */}
      <p>{contact.position}</p>
      {/* Company */}
      <p>{contact.company}</p>
      {/* Bottom */}
      <div className="bottom">
        <div>
          <span>
            <FaPhoneFlip />
          </span>
          <span>{contact.phone}</span>
        </div>
        <div>
          <span>
            <IoMdMailUnread />
          </span>
          <span>{contact.email}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
