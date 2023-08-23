import { useContext, useEffect, useState } from "react";
import BoxRapper from "./BoxRapper";
import { AppContext } from "../Context/ContextProvider";

const MCQ = () => {
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
  ]);
  useEffect(()=>
  {
    let dataArr = data.some((ele) => {
      return ele.isChecked === true;
    });
    if (dataArr) {
      setWorning({
        ...worning,
        isMCQ: false,
      });
    } else {
      setWorning({
        ...worning,
        isMCQ: true,
      });
    }
  },[data, setWorning, worning])
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
  return (
    <BoxRapper>
      <div className="Heading">MCQ</div>
      <div className="options">
        {data.map((ele, index) => {
          return (
            <span>
              <input
                onClick={() => {
                  checkData(index);
                  // Check()
                }}
                type="radio"
                checked={ele.isChecked}
                id=""
              />
              <div>{ele.data}</div>
            </span>
          );
        })}
      </div>
      {worning?.isMCQ && (
        <div className="worning1">this is required question</div>
      )}
    </BoxRapper>
  );
};
export default MCQ;
