import { RiCloseLargeLine } from "react-icons/ri";
import Field from "./Filed";
import axios from "axios";
const Modal = ({
  isModelOpen,
  setIsModelOpen,
  setContacts,
  editItem,
  setEditItem,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const newContact = Object.fromEntries(formData.entries());
    if (!editItem) {
      axios
        .post("/contact", newContact)
        .then(() => {
          setContacts((contacts) => [...contacts, newContact]);
        })
        .catch((err) => {
          alert(`İşlem Gerçekleştirilemedi!`);
          console.log(`hataa: ${err}`);
        });
    } else {
      axios.put(`/contact/${editItem.id}`, newContact).then(() => {
        setContacts((contacts) =>
          contacts.map((contact) =>
            contact.id === editItem.id ? newContact : contact
          )
        );
        setEditItem(null);
      });
    }

    setIsModelOpen(() => false);
  };

  return (
    isModelOpen && (
      <div className="modal">
        <div className="modal-inner">
          {/* Modal Head */}
          <div className="modal-head">
            <h2>{editItem ? "Kişiyi Güncelle" : "Yeni Kişi Ekle"}</h2>
            <button onClick={() => setIsModelOpen(false)}>
              <RiCloseLargeLine />
            </button>
          </div>
          {/* Form */}
          <form onSubmit={handleSubmit}>
            <Field value={editItem?.name} label="İsim Soyisim" name="name" />
            <Field
              value={editItem?.position}
              label="Pozisyon"
              name="position"
            />
            <Field value={editItem?.company} label="Şirket" name="company" />
            <Field value={editItem?.phone} label="Telefon" name="phone" />
            <Field value={editItem?.email} label="Email" name="email" />
            <div className="buttons" name="name">
              <button type="button" onClick={() => setIsModelOpen(false)}>
                Vazgeç
              </button>
              <button type="submit">Gönder</button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default Modal;
