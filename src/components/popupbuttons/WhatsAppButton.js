import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";

const WhatsAppButton = () => {

  return (
    <>
      <div className="flex fex-col items-center gap-6 sticky z-20  ">
        <Link to="https://wa.me/+917505207041" target="_blank" className={`zoom-out-btn fixed bottom-20 left-6 text-5xl hover:text-green-500  text-green-700 bg-white font-bold p-2 rounded-full`}
        >
          <FaWhatsapp />
        </Link>

        
      </div>
    </>   
  );
};

export default WhatsAppButton;