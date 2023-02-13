const CreateImg = ({ imgs, title, description, links }) => {

  return (
    <div className="container">
      <div className="pictures">{imgs}</div>
      <div className="titles">{title}</div>
      <div className="description">{description}</div>
      <div className="links">{links}</div>
    </div>
  );
};

export default CreateImg;

