import { useContext, useEffect, useState } from "react";
import BoxRapper from "./BoxRapper";
import { AppContext } from "../Context/ContextProvider";

const DropDown = () => {
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
            isChecked: false,
          };
        }
      });
    });
  };

  // useEffect(() => {
  //   let dataArr = data.some((ele) => {
  //     return ele.isChecked === true;
  //   });
  //   if (dataArr) {
  //     setWorning({
  //       ...worning,
  //       isDropdown: false,
  //     });
  //   } else {
  //     setWorning({
  //       ...worning,
  //       isDropdown: true,
  //     });
  //   }
  // }, [data, setWorning, worning]);
  return (
    <BoxRapper>
      <div className="Heading">Drop down</div>
      <div className="options">
        <select
          name="select"
          defaultValue="Choose"
          placeholder="Choose"
          className="select"
        >
          {data.map((ele, index) => {
            return (
              <option
                value={ele.data}
                onClick={() => {
                  checkData(index);
                  // alert("hi")
                }}
              >
                {ele.data}
              </option>
            );
          })}
        </select>
      </div>
      {/* {!worning?.isDropdown && (
        <div className="worning1">this is required question</div>
      )} */}
    </BoxRapper>
  );
};
export default DropDown;
