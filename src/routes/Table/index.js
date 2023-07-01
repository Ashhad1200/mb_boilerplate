import React from "react";
import IntlMessages from "util/IntlMessages";
import TableData from "./tableData";


const Table = () => {
  return (
    <div>
      <h2 className="title gx-mb-4">
        <IntlMessages id="sidebar.dataTable" />
      </h2>

      <div className="gx-d-flex justify-content-center">
        <TableData/>
      </div>
    </div>
  );
};

export default Table;