import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import React from "react";

// import { Container } from './styles';
const DashboardButton = ({ children, to }) => (
  <Button
    component={Link}
    to={to}
    variant="outlined"
    color="primary"
    size="large"
    fullWidth
  >
    {children}
  </Button>
);

export default DashboardButton;
