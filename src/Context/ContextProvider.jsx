import { createContext, useState } from "react";
export const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const [worning, setWorning] = useState({
    isMCQ: true,
    isCheckBox: true,
    isShortAns: true,
    ispara: true,
    isDropdown: false,
    isfile: true,
    isScale: true,
    isChoice: true,
    isbox: true,
  });
  const submitData = () => {
   let submited= Object.values(worning).every(value=>value===false)
       if(submited)
       {
        alert("Form is submited successfully")
       }
       else
       {
        alert("please fiil all the data")
       }
  };
  const info = {
    worning,
    setWorning,
    submitData
  };
  return <AppContext.Provider value={info}>{children}</AppContext.Provider>;
};
export default ContextProvider;
