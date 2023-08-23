import { useContext } from "react";
import BoxRapper from "./BoxRapper";
import { AppContext } from "../Context/ContextProvider";

const FileUpload = () => {
  const { worning, setWorning } = useContext(AppContext);
  return (
    <BoxRapper>
      <div className="Heading">File Upload</div>
      <div className="options">
        <input
          type="file"
          name=""
          id=""
          onChange={(e) => {
            if (e.target.files[0]) {
              setWorning({
                ...worning,
                isfile: false,
              });
            } else {
              setWorning({
                ...worning,
                isfile: true,
              });
            }
          }}
        />
      </div>
      {worning?.isfile && (
        <div className="worning1">this is required question</div>
      )}
    </BoxRapper>
  );
};
export default FileUpload;
