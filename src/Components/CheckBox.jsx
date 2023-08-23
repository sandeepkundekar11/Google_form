import { useContext, useEffect, useState } from "react";
import BoxRapper from "./BoxRapper";
import { AppContext } from "../Context/ContextProvider";

const CheckBox = () => {
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
          };
        }
      });
    });
  };

  useEffect(()=>
  {
    let dataArr = data.some((ele) => {
      return ele.isChecked === true;
    });
    if (dataArr) {
      setWorning({
        ...worning,
        isCheckBox: false,
      });
    } else {
      setWorning({
        ...worning,
        isCheckBox: true,
      });
    }
  },[data, setWorning, worning])
  return (
    <BoxRapper>
      <div className="Heading">Checkbox</div>
      <div className="options">
        {data.map((ele, index) => {
          return (
            <span>
              <input
                type="checkbox"
                id=""
                onClick={() => {
                  checkData(index);
                }}
                checked={ele.isChecked}
              />
              <div>{ele.data}</div>
            </span>
          );
        })}
      </div>
      {worning.isCheckBox && (
        <div className="worning1">this is required question</div>
      )}
    </BoxRapper>
  );
};
export default CheckBox;
