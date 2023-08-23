import BoxRapper from "./BoxRapper";

const TopBox = () => {
  return (
    <BoxRapper styleClass={'border'}>
      <div className="topbox">
        <h1>Assignment Task</h1>
        <p>
          The name and Photo associative with Google Account wiil be recorded
          when you upload files and submit this form .Your email address in not
          part of Your responce
        </p>
        <div className="worning">
            Indicates required question
        </div>
      </div>
    </BoxRapper>
  );
};
export default TopBox;
