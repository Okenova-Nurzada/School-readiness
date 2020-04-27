import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./Navigation.module.css";
export default () => (
  <ul className={classes.Navigation}>
    <NavigationItem url="/" active>
      School bag
    </NavigationItem>
    <NavigationItem url="/checkout">Checkout</NavigationItem>
  </ul>
);