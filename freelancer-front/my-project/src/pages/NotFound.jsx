import React from "react";
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../hooks/useMoveBack";

function NotFound() {
  const moveBAck = useMoveBack();
  return (
    <div className="container xl:max-w-screen-xl">
      <div className="sm:max-w-sm flex justify-center pt-10">
        <div>
          <h1 className="text-xl font-bold tetx-seondary-700 mb-8">
            صفحه ای که دنبالش بودید پید نشد !
          </h1>
          <button onClick={handleBack} className="flex items-center gap-x-8">
            <HiArrowRight className="w-6 h-6 text-primary-900" />
            <span>برگشت</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
