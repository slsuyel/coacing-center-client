import React from "react";
import SalesChart from "./SalesChart";
import RoomCharts from "./RoomCharts";
import { CardSubtitle, Col, Row } from "reactstrap";
import useTeacher from "../../hooks/useTeacher";
import useAllUsers from "../../hooks/useAllUsers";
import usePrograms from "../../hooks/usePrograms";
import Loader from "../../utilities/Loader";
import useTotalOrders from "../../hooks/useTotalOrders";

export default function Home() {
  const [users, ,] = useAllUsers()
  const [teachers, ,] = useTeacher()
  const [programs, ,] = usePrograms()
  const [orders, ,] = useTotalOrders()
  const emailSet = new Set();
  const uniqueStudent = [];
  orders.forEach(order => {
    const email = order.order.email;
    if (!emailSet.has(email)) {
      emailSet.add(email);
      uniqueStudent.push(email);
    }
  });
  const totalSales = orders.reduce((total, order) => {
    const price = parseInt(order.price);
    if (!isNaN(price)) {
      return total + price;
    }
    return total;
  }, 0);


  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0"></h1>
          </div>

        </div>
        <div className="container-fluid">
          <CardSubtitle className="text-muted" tag="h6">
            Report
          </CardSubtitle>
          <div className="bg-primary text-white my-3 p-3 rounded">
            <Row>
              <Col md="4">
                <h6>Total Students</h6>
                <h4 className="mb-0 fw-bold">{orders?.length}</h4>
              </Col>
              <Col md="4">
                <h6>Total Teachers</h6>
                <h4 className="mb-0 fw-bold">{teachers?.length}</h4>
              </Col>
              <Col md="4">
                <h6>Total Programs </h6>
                <h4 className="mb-0 fw-bold">{programs?.length}</h4>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <div className="small-box bg-info">
                <div className="inner">
                  <h3>{uniqueStudent?.length}</h3>
                  <p>unique Student</p>
                </div>
                <div className="icon">
                  <i className=" fas fa-user-plus" />
                </div>

              </div>
            </div>
            <div className="col-lg-3">
              <div className="small-box bg-success">
                <div className="inner">
                  <h3>{totalSales && totalSales}</h3>
                  <p>Total sells</p>
                </div>
                <div className="icon">
                  <i className="fas fa-shopping-cart" />
                </div>

              </div>
            </div>
            <div className="col-lg-3">
              <div className="small-box bg-danger">
                <div className="inner">
                  <h3>{users?.length}</h3>
                  <p>All Users</p>
                </div>
                <div className="icon">
                  <i className="fas fa-users" />
                </div>

              </div>
            </div>
            <div className="col-lg-3">
              <div className="small-box bg-warning">
                <div className="inner">
                  <h3>Loding . . .</h3>
                  <p>Today Sell </p>
                </div>
                <div className="icon">
                  <i className="fas fa-calendar " />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-header row">
        {/* sm="6" lg="6" xl="7" xxl="8 */}
        <div>
          <SalesChart />
        </div>
      </div>
    </div>
  );
}
