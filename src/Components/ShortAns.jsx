import { useContext } from "react";
import BoxRapper from "./BoxRapper";
import { AppContext } from "../Context/ContextProvider";

const ShortAns = () => {
  const { worning, setWorning } = useContext(AppContext);
  return (
    <BoxRapper>
      <div className="Heading">Short Answer</div>
      <div className="options">
        <input
          type="text"
          className="ans"
          placeholder="Your answer"
          onChange={(e) => {
            if (e.target.value.length > 0) {
              setWorning({
                ...worning,
                isShortAns: false,
              });
            } else {
              setWorning({
                ...worning,
                isShortAns: true,
              });
            }
          }}
        />
      </div>
      {worning.isShortAns && (
        <div className="worning1">this is required question</div>
      )}
    </BoxRapper>
  );
};
export default ShortAns;
