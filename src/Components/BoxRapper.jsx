const BoxRapper = ({ children ,styleClass}) => {
  return (
    <div className={`boxRapperContainer ${styleClass}`}>
      {children}
    </div>
  );
};
export default BoxRapper;
