import { Badge } from "react-bootstrap";
import { useParams } from "react-router-dom";
import StoreDataList from "../dataLists/StoreDataList";
import { STOREDATA } from "./Store";

function Products() {
  const params = useParams();
  console.log(params);
  return (
    <>
      {" "}
      {STOREDATA.map((p) => {
        if (params.productId === p.id) {
          return (
            <div key={p.id}>
              <h1 className="mt-5 p-5 font-weight-bolder">Review : </h1>
              <StoreDataList
                id={p.id}
                title={p.title}
                price={p.price}
                url={p.url}
              />

              <h2 className="pl-5 pb-5">
                Quality :{" "}
                <Badge pill variant="warning" className="bg-warning">
                  5 Star
                </Badge>
              </h2>
            </div>
          );
        }
      })}
      {/* {params.productId === 'a101' && <></>} */}
    </>
  );
}

export default Products;
