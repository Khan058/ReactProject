export const Template = function (props) {
  const { link, img } = props;
  return (
    <div className="links">
      <p>{link}</p>
      <img src={img} alt="Dropdown" />
    </div>
  );
};
