const Main = ({ children }) => {
  const GreenSwirl = () => {
    return <div className="green-swirl green-swirl-background"></div>;
  };

  const BrownSwirl = () => {
    return <div className="brown-swirl brown-swirl-background"></div>;
  };

  return (
    <div className="background-position">
      {GreenSwirl()}
      {children}
      {BrownSwirl()}
    </div>
  );
};

export default Main;