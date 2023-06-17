import { Button } from "react-bootstrap";

function Footer() {
  return (
    <footer className="p-3 bg-info text-white d-flex justify-content-around">
      <span
        style={{ fontFamily: "serif" }}
        className="display-4 font-weight-bolder"
      >
        My Generics
      </span>
      <div className="d-flex">
        <Button variant="info mx-3">
          <img
            src="https://toppng.com/uploads/preview/youtube-play-button-pn-11545514822bk31y8sdg5.png"
            alt="Youtube"
            height="30px"
          />
        </Button>
        <Button variant="info mx-3">
          <img
            src="https://www.pngplay.com/wp-content/uploads/13/Ig-Icon-PNG-Clipart-Background.png"
            alt="Instagram"
            height="30px"
          />
        </Button>
        <Button variant="info mx-3">
          <img
            src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7915717/facebook-icon-md.png"
            alt="Facebook"
            height="30px"
          />
        </Button>
      </div>
    </footer>
  );
}

export default Footer;
