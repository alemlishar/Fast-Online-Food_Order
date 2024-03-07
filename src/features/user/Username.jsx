import React from "react";
import { useSelector } from "react-redux";
import dataSource from "../../store";

function Username() {

  const username = useSelector(dataSource => dataSource.user.username)
  return <div className="hidden text-sm font-semibold md:block">{username}</div>;
}

export default Username;