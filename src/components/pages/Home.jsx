import TableData from "../dataLists/TableData";

function Home() {
  return (
    <>
      <div className="p-3 mt-5 bg-secondary text-white d-flex flex-column align-items-center py-5">
        <h3 className="p-3 mt-5 border border-info">Get Our Latest Album</h3>
        <img
          src="https://www.pngmart.com/files/3/Play-Button-PNG-Image.png"
          alt="Play"
          height="70px"
        />
      </div>

      <h1
        className="text-center font-weight-bolder my-5"
        style={{ fontFamily: "serif" }}
      >
        Tours
      </h1>

      <TableData />
    </>
  );
}

export default Home;
