import { useContext } from "react";
import { AppContext } from "../Context/ContextProvider";

const Buttons=()=>
{
    const { submitData } = useContext(AppContext);
    return(
        <div className="btnConatiner">
          <button onClick={()=>
          {
            submitData()
          }}>Submit</button>
          <button
            onClick={() => {
              window.location.reload();
            }}
          >
            Clear form
          </button>
        </div>
    )
};
export default Buttons;