import React, { FC } from 'react';
import Spinner from './Spinner';
import DataTable, { createTheme, TableProps } from 'react-data-table-component';

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
      background:"#00142A",
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

interface DataGridProps extends TableProps<any> {}

const DataGrid: FC<DataGridProps> = (props) => {
  return (
    <DataTable
      pagination
      theme="solarized"
      customStyles={customStyles}
      // highlightOnHover
      pointerOnHover
      dense
      progressComponent={<Spinner />}
      {...props}
      // noDataComponent={<div className="text-gray-500">No records to display</div>}
    />
  );
};

export default DataGrid;
