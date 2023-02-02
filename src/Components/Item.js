import React, { useState } from "react";
import "./Item.css";
const Item = (props) => {
  const [expanded, setExpanded] = useState(false);

  const viewHandler = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className="item-layout">
        <div className="item-description">
          <div className="name">{props.data.company.name}</div>
          <table className="table">
            <tr>
              <th>CONTACT</th>
              <th>CITY</th>
              <th className="state">STATE</th>
            </tr>
            <tr>
              <td>{props.data.name}</td>
              <td>{props.data.address.city}</td>
              <td>{props.data.address.zipcode}</td>
            </tr>
          </table>
          <button className="toggle" onClick={viewHandler}>
            {expanded ? "Hide details" : "View details"}
          </button>
        </div>
        {expanded ? (
          <div className="expanded-box">
            <div className="header-desc">Description</div>
            <div className="desc">
              The sun rose over the horizon, casting a warm glow on the small
              town. As the residents went about their daily routines, a sense of
              unity and contentment filled the air. Despite the challenges they
              faced, the people of the town remained optimistic and grateful for
              the simple pleasures in life. Whether it was a cup of coffee with
              a friend, a walk in the park, or just a quiet moment to reflect,
              they cherished each moment and made the most of every day. In this
              place, surrounded by love and hope, life was truly meaningful.
            </div>

            <table className="table1">
              <tr>
                <th>CONTACT PERSON</th>
                <th>ADDRESS</th>
              </tr>
              <tr>
                <td>{props.data.name}</td>
                <td>
                  {props.data.address.street +
                    " " +
                    props.data.address.suite +
                    " " +
                    props.data.address.city}
                </td>
              </tr>
            </table>

            <table className="table2">
              <tr>
                <th>DESIGNATION</th>
                <th>CITY</th>
              </tr>
              <tr>
                <td>{props.data.company.bs}</td>
                <td>{props.data.address.city}</td>
              </tr>
            </table>

            <table className="table3">
              <tr>
                <th>EMAILS</th>
                <th>STATE</th>
              </tr>
              <tr>
                <td>{props.data.email}</td>
                <td>{props.data.address.zipcode}</td>
              </tr>
            </table>

            <table className="table4">
              <tr>
                <th>PHONE</th>
                <th>COUNTRY</th>
              </tr>
              <tr>
                <td>{props.data.phone}</td>
                <td>{props.data.website}</td>
              </tr>
            </table>
          </div>
        ) : null}
      </div>
    </>
  );
};
export default Item;
