import { useContext, useEffect, useState } from "react";
import BoxRapper from "./BoxRapper";
import { AppContext } from "../Context/ContextProvider";

const ChoiceGrid = () => {
  const { worning, setWorning } = useContext(AppContext);
  const [data, setData] = useState([
    {
      id: 1,
      row1: [
        {
          subId: 1,
          ischecked: false,
        },
        {
          subId: 2,
          ischecked: false,
        },
        {
          subId: 3,
          ischecked: false,
        },
      ],
    },
    {
      id: 2,
      row1: [
        {
          subId: 1,
          ischecked: false,
        },
        {
          subId: 2,
          ischecked: false,
        },
        {
          subId: 3,
          ischecked: false,
        },
      ],
    },
    {
      id: 3,
      row1: [
        {
          subId: 1,
          ischecked: false,
        },
        {
          subId: 2,
          ischecked: false,
        },
        {
          subId: 3,
          ischecked: false,
        },
      ],
    },
  ]);
  useEffect(() => {
    let dataArr1 = data[0].row1.some((ele) => {
      return ele.ischecked === true;
    });
    let dataArr2 = data[1].row1.some((ele) => {
      return ele.ischecked === true;
    });
    let dataArr3 = data[2].row1.some((ele) => {
      return ele.ischecked === true;
    });
    if (dataArr1 && dataArr2 && dataArr3) {
      setWorning({
        ...worning,
        isChoice: false,
      });
    } else {
      setWorning({
        ...worning,
        isChoice: true,
      });
    }
  }, [data, setWorning, worning]);
  const checkData = (index, inputIndex) => {
    setData((arr) => {
      return arr.map((ele, i) => {
        if (i === index) {
          return {
            ...ele,
            row1: ele.row1.map((data, j) => {
              if (inputIndex === j) {
                return {
                  ...data,
                  ischecked: !data.ischecked,
                };
              } else {
                return {
                  ...data,
                  ischecked: false,
                };
              }
            }),
          };
        } else {
          return ele;
        }
      });
    });
  };
  return (
    <BoxRapper>
      <div className="Heading">Multi choice Grid</div>
      <table>
        <tr>
          <th></th>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
        </tr>
        <tbody>
          <tr>
            <td>Row 1</td>
            {data[0].row1.map((ele, index) => {
              return (
                <td>
                  <input
                    onClick={() => checkData(0, index)}
                    type="radio"
                    checked={ele.ischecked}
                  />
                </td>
              );
            })}
          </tr>
          <tr>
            <td>Row 2</td>
            {data[1].row1.map((ele, index) => {
              return (
                <td>
                  <input
                    type="radio"
                    onClick={() => checkData(1, index)}
                    checked={ele.ischecked}
                  />
                </td>
              );
            })}
          </tr>
          <tr>
            <td>Row 3</td>
            {data[2].row1.map((ele, index) => {
              return (
                <td>
                  <input
                    type="radio"
                    onClick={() => checkData(2, index)}
                    checked={ele.ischecked}
                  />
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
      {worning?.isChoice && (
        <div className="worning1">this is required question</div>
      )}
    </BoxRapper>
  );
};
export default ChoiceGrid;
