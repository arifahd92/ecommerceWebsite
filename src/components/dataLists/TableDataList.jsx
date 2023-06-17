import { Button } from "react-bootstrap";

function TableDataList(props) {
  return (
    <tr style={{ fontFamily: "Times New Roman" }}>
      <td>{props.date}</td>
      <td className="text-secondary">{props.location}</td>
      <td className="text-secondary">{props.description}</td>
      <td>
        <Button
          variant="info"
          className="w-100"
          style={{ fontFamily: "monospace" }}
        >
          Buy Ticket
        </Button>
      </td>
    </tr>
  );
}

export default TableDataList;
