import { useContext, useEffect, useState } from "react";
import BoxRapper from "./BoxRapper";
import { AppContext } from "../Context/ContextProvider";

const LinearScale = () => {
  const { worning, setWorning } = useContext(AppContext);
  const [data, setData] = useState([
    {
      id: 1,
      data: "option1",
      isChecked: false,
    },
    {
      id: 2,
      data: "option2",
      isChecked: false,
    },
    {
      id: 3,
      data: "option3",
      isChecked: false,
    },
    {
      id: 4,
      data: "option3",
      isChecked: false,
    },
    {
      id: 5,
      data: "option3",
      isChecked: false,
    },
  ]);
  const checkData = (index) => {
    setData((data) => {
      return data.map((ele, i) => {
        if (i === index) {
          return {
            ...ele,
            isChecked: !ele.isChecked,
          };
        } else {
          return {
            ...ele,
            isChecked: false,
          };
        }
      });
    });
  };
 
  useEffect(() => {
    let dataArr = data.some((ele) => {
      return ele.isChecked === true;
    });
    if (dataArr) {
      setWorning({
        ...worning,
        isScale: false,
      });
    } else {
      setWorning({
        ...worning,
        isScale: true,
      });
    }
  },[data, setWorning, worning]);
  return (
    <BoxRapper>
      <div className="Heading">Linear Scale</div>
      <div className="options">
        <div>Worst</div>
        <div>
          {data.map((ele, index) => {
            return (
              <span>
                <div>{ele.id}</div>
                <input
                  type="radio"
                  id=""
                  onClick={() => {
                    checkData(index);
                  }}
                  checked={ele.isChecked}
                />
              </span>
            );
          })}
        </div>
        <div>Best</div>
      </div>
      {worning?.isScale && (
        <div className="worning1">this is required question</div>
      )}
    </BoxRapper>
  );
};
export default LinearScale;
