import TableData from "../dataLists/TableData";

function Home() {
  return (
    <>
      <div className="p-3 container-fluid mt-5 bg-secondary text-white d-flex flex-column align-items-center py-5">
        <h3 className="p-3 mt-5 border border-info">Get Our Latest Album</h3>
        <div className="row">
          <div className="col border border-danger text-center d-flex  justify-content-center ">
            <img
              className="d-block text-center"
              style={{ height: "300px", width: "350px" }}
              src="https://www.pngmart.com/files/3/Play-Button-PNG-Image.png"
              alt="Play"
            />
          </div>
        </div>
      </div>

      <h1
        className="text-center font-weight-bolder my-5"
        style={{ fontFamily: "serif" }}>
        Tours
      </h1>

      <TableData />
    </>
  );
}

export default Home;
