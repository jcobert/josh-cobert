import React from "react";

function Card(props) {
  return (
    <div className="text-center">
      <div className="bg-slate-100 md:w-11/12 md:max-w-2xl mx-auto p-3 md:p-6 rounded-xl border border-slate-400 shadow-md">
        {/* Title */}
        <div className="font-bold text-xl">
            <h4></h4>
        </div>
        {/* Body */}
        <div className="text-left">
            <p></p>
        </div>
      </div>
    </div>
  );
}

export default Card;
