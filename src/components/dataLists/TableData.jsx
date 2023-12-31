import { Container, Table } from "react-bootstrap";
import TableDataList from "./TableDataList";

const TABLEDATA = [
  {
    date: "JUL16",
    location: "DETROIT, MI",
    description: "DTE ENERGY MUSIC THEATRE",
  },
  {
    date: "JUL19",
    location: "TORONTO,ON",
    description: "BUDWEISER STAGE",
  },
  {
    date: "JUL24",
    location: "BRISTOW, VA",
    description: "JIGGY LUBE LIVE",
  },
  {
    date: "AUG16",
    location: "PHOENIX, AZ",
    description: "AK-CHIN PAVILION",
  },
  {
    date: "AUG20",
    location: "LAS VEGAS, NV",
    description: "T-MOBILE ARENA",
  },
  {
    date: "AUG25",
    location: "CONCORD, CA",
    description: "CONCORD PAVILION",
  },
];

function TableData() {
  return (
    <Container className="table-responsive d-flex justify-content-center text-center mb-5">
      <Table className="">
        <thead>
          <tr>
            <th>Date</th>
            <th>Location</th>
            <th>Description</th>
            <th>Buy Now</th>
          </tr>
        </thead>
        <tbody>
          {TABLEDATA.map((item) => (
            <TableDataList
              key={Math.random().toString()}
              date={item.date}
              location={item.location}
              description={item.description}
            />
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default TableData;
