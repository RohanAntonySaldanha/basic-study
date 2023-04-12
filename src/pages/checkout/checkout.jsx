import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./checkout.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCol,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBTextArea,
  MDBTypography,
} from "mdb-react-ui-kit";

export const Checkout = (props) => {
  let tempValue = 0;
  tempValue = props.passLogin;
  let emailValue = "";
  emailValue = props.passEmail;
  const { getTotalCartAmount, clearCart } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const orderAlert = () => {
    alert("Order Completed");
  };
  return (
    <div className="mx-auto mt-5" style={{ maxWidth: "900px" }}>
      {tempValue === 1 ? <h1>You Are Already Logged In</h1> : <h1>Guest</h1>}
      <MDBRow>
        <MDBCol md="8" className="mb-4">
          <MDBCard className="mb-4">
            <MDBCardHeader className="py-3">
              <MDBTypography tag="h5" className="mb-0">
                Biling details
              </MDBTypography>
            </MDBCardHeader>
            <MDBCardBody>
              <form>
                <MDBRow className="mb-4">
                  <MDBCol>
                    <MDBInput label="First name" type="text" />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput label="Last name" type="text" />
                  </MDBCol>
                </MDBRow>

                <MDBInput label="Company name" type="text" className="mb-4" />
                <MDBInput label="Address" type="text" className="mb-4" />
                {emailValue ? (
                  <MDBInput label="Email" type="text" className="mb-4" value={emailValue}/>
                ) : (
                  <MDBInput label="Email" type="text" className="mb-4" />
                )}
                
                <MDBInput label="Phone" type="text" className="mb-4" />
                <MDBTextArea
                  label="Additional information"
                  rows={4}
                  className="mb-4"
                />
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-4">
          <MDBCard className="mb-4">
            <MDBCardHeader className="py-3">
              <MDBTypography tag="h5" className="mb-0">
                Summary
              </MDBTypography>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBListGroup flush>
                <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Total
                  <span>Rs {totalAmount} </span>
                </MDBListGroupItem>
                <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>Total amount</strong>
                    <strong>
                      <p className="mb-0">(including VAT)</p>
                    </strong>
                  </div>
                  <span>
                    <strong>Rs {totalAmount} </strong>
                  </span>
                </MDBListGroupItem>
              </MDBListGroup>
              <div className="purchase">
                <button type="reset" onClick={() => orderAlert() + clearCart()}>
                  Make purchase
                </button>
              </div>
              <h1></h1>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
};
