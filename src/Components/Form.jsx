import BoxGrid from "./BoxGrid";
import Buttons from "./Buttons";
import CheckBox from "./CheckBox";
import ChoiceGrid from "./ChoiceGread";
import DropDown from "./Dropdown";
import FileUpload from "./FileUpload";
import LinearScale from "./LinearScale";
import MCQ from "./MCQ";
import Para from "./Para";
import ShortAns from "./ShortAns";
import TopBox from "./TopBox";

const Form = () => {
  return (
    <div>
      <TopBox />
      <MCQ />
      <CheckBox />
      <ShortAns />
      <Para />
      <DropDown />
      <FileUpload />
      <LinearScale />
      <ChoiceGrid />
      <BoxGrid />
      <Buttons />
    </div>
  );
};
export default Form;
