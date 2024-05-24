import React from "react";

const QuickContact = ({ styles }) => (
    <div className="md:ps-8">
        <button type="button" className={`my-6 py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
            JETZT ANFRAGEN!
        </button>
    </div>
);

export default QuickContact;