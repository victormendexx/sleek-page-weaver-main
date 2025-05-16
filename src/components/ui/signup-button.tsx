import { ArrowRight } from "lucide-react";

import React from "react";

const SignupButton: React.FC = () => {
  return (
    <div className="py-2 pl-6  border-solid border-2 border-white rounded-full w-[12rem] hover:scale-105 transition-all duration-300">
      <a href="#register" className="w-full flex justify-center items-center">
        Cadastre-se
        <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center ml-6  ">
          <ArrowRight className="-rotate-45 text-[#080846]" size={20} />
        </div>
      </a>
    </div>
  );
};

export default SignupButton;
