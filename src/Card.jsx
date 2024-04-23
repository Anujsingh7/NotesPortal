const Card = ({data}) => {
  
  console.log(data);
  return (
    <>
      <div className="card" id="outline">
        <img src={data.imageURL} alt="ds" className="card_img" />
        <div className="card_info">
          <h3 className="card_category">{data.subject}</h3>
          <h4 className="card_title">Branch: {data.branch}</h4>
          <h4 className="card_title">Semester: {data.semester}</h4>
        </div>
          <a className="link" href={data.pdfUrl} target="_blank">
            <button className="download-btn">Download</button>
          </a>
      </div>
    </>
  );
};
export default Card;
