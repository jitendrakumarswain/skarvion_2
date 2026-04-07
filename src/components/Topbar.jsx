import { useState } from "react";
import ConsultationModal from "./ConsultationModal";

export default function Topbar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="topbar">
        <div>
         <b> 📞 +91 7064949597 | 📍 Badagada, Bhubaneswar, 751006, Odisha </b> 
        </div>

        <button
          className="consult-btn"
          onClick={() => setShowModal(true)}
        >
          Free Consultation
        </button>
      </div>

      <ConsultationModal
        show={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
}