import React, { FC, useState } from 'react';
import Spinner from './Spinner';
import DataTable, { createTheme, TableProps } from 'react-data-table-component';
import { ExpandableRowsComponent } from 'react-data-table-component/dist/DataTable/types';

createTheme('solarized', {
  background: {
    default: 'transparent',
  },
  context: {
    background: 'transparent',
    text: '#ffffff',
  },
  divider: {
    default: '#C3D5F173',
  },
}, 'light');

const customStyles = {
  rows: {
    style: {
      minHeight: '72px',
      color: '#ffffff',
      borderBottom: '1px solid #C3D5F173',
    },
  },
  headCells: {
    style: {
      padding: '20px 8px',
      fontWeight: 'bold',
      fontSize: 14,
      background: "#00142A",
      color: '#fff',
      borderBottom: '1px solid #C3D5F173',
    },
  },
  cells: {
    style: {
      padding: '20px 8px',
      color: '#ffffff',
    },
  },
};

// const columnsWithAction = [
//   { name: 'ID', selector: 'id', sortable: true },
//   { name: 'Name', selector: 'name', sortable: true },
//   { name: 'Age', selector: 'age', sortable: true },
//   {
//     cell: (row) => (
//       <button onClick={() => handleRowExpand(row)}>
//         {expandedRows.includes(row.id) ? 'Collapse' : 'Expand'}
//       </button>
//     ),
//     allowOverflow: true,
//     button: true,
//     width: '56px', // Adjust width as needed
//   },
// ];

interface DataGridProps {
  expandedRows?: number[];
  setExpandedRows?: React.Dispatch<React.SetStateAction<number[]>>;
  columns: any[];
  data: any[]; 
}

const DataGrid: FC<DataGridProps> = ({ expandedRows = [], setExpandedRows, data, columns, ...props }) => {

  const handleRowExpand = (row: any) => {
    const isRowExpanded = expandedRows.includes(row.id);
    const newExpandedRows = isRowExpanded
      ? expandedRows.filter(id => id !== row.id)
      : [...expandedRows, row.id];
    setExpandedRows && setExpandedRows(newExpandedRows);
  };

  const ExpandableComponent: ExpandableRowsComponent<any> = ({ data }) => (
    <NestedForm />
  );

  return (
    <DataTable
      data={data}
      columns={columns}
      pagination
      theme="solarized"
      customStyles={customStyles}
      // highlightOnHover
      pointerOnHover
      dense
      progressComponent={<Spinner />}
      {...props}
      expandableRows
      expandableRowExpanded={row => expandedRows.includes(row.id)}
      onRowExpandToggled={handleRowExpand}
      expandableRowsComponent={ExpandableComponent}
    />
  );
};

const NestedForm = () => {
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nested Form Field:
        <input type="text" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DataGrid;
