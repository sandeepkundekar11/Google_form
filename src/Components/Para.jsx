import { useContext } from "react";
import BoxRapper from "./BoxRapper";
import { AppContext } from "../Context/ContextProvider";

const Para = () => {
  const { worning, setWorning } = useContext(AppContext);
  return (
    <BoxRapper>
      <div className="Heading">ParaGraph</div>
      <div className="options">
        <input
          type="text"
          className="ans"
          placeholder="Your answer"
          onChange={(e) => {
            if (e.target.value.length > 0) {
              setWorning({
                ...worning,
                ispara: false,
              });
            } else {
              setWorning({
                ...worning,
                ispara: true,
              });
            }
          }}
        />
      </div>
      {worning?.ispara && (
        <div className="worning1">this is required question</div>
      )}
    </BoxRapper>
  );
};
export default Para;
