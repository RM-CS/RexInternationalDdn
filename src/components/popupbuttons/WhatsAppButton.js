import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";

const WhatsAppButton = () => {

  return (
    <>
      <div className="flex fex-col items-center gap-6 relative z-40">
        <Link to="https://web.whatsapp.com/" target="_blank" className={`zoom-out-btn fixed bottom-20 right-6 text-5xl hover:text-green-500  text-green-700 font-bold p-4 rounded-full`}
        >
          <FaWhatsapp />
        </Link>

        
      </div>
    </>   
  );
};

export default WhatsAppButton;
