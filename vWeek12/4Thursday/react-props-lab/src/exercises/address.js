import React from "react";
import AddressLabel from "../AddressLabel";

const Address = (props) => {
  return <>
    Address Label <br />

    <AddressLabel name="Joy" address="123 st" city="Houston" state="TX" zip="77494"/>
    <AddressLabel name="Ramen" address="123 st" city="Houston" state="TX" zip="77494"/>

    
  </>;
};

export default Address;
