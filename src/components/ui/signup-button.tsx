import { ArrowRight } from "lucide-react";

import React from "react";

type SignupButtonProps = {
  extraClasses?: string;
  buttonExtraClasses?: string;
  iconExtraClasses?: string;
  arrowSize?: string;
};

const SignupButton: React.FC<SignupButtonProps> = ({
  extraClasses,
  buttonExtraClasses,
  iconExtraClasses,
  arrowSize,
}) => {
  return (
    <div
      className={`py-2 pl-6  border-solid border-2 border-white rounded-full w-[12rem] transition-all duration-300 ${extraClasses}`}
    >
      <a
        href="#register"
        className="w-full flex justify-between px-[1vw] items-center"
      >
        <p></p>
        <p>Cadastre-se</p>
        <div
          className={`bg-white w-8 h-8 rounded-full flex items-center justify-center ml-6 ${buttonExtraClasses}`}
        >
          <ArrowRight
            className={`-rotate-45 text-[#080846] ${iconExtraClasses}`}
            size={arrowSize ?? 20}
          />
        </div>
      </a>
    </div>
  );
};

export default SignupButton;
