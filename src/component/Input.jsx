import React from 'react';

const Input = ({ type, placeholder, value, onChange,className,labelclass,text}) => {
  return (
    <>
    <p className={`${labelclass} ml-[-0.6%] h-[20%] text-[0.7rem] font-bold `}>{text}</p>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${className}  pl-3 mb- h-[60%] w-[100%] rounded-md border-[#F3F3F3] border-[0.14rem]  focus:outline-none  `}
    />
    </>
  );
};

export default Input;
