// components/ExpandableTable.tsx
import React, { useState, ReactNode } from 'react';

type Column = {
  key: string;
  label: string;
  render?: (row: Row) => ReactNode;
};

type Row = {
  [key: string]: any;
};

type Action = {
  label: string;
  onClick: (row: Row) => void;
};

type ExpandableTableProps = {
  columns: any[];
  data: any[];
  renderExpandedRow: (row: any, fun:(index:number)=>void) => ReactNode;
  actions?: any[];
  styles?:any;
  isLoading:boolean
};

const ExpandableTable: React.FC<ExpandableTableProps> = ({ columns, data, renderExpandedRow, actions = [], styles, isLoading }) => {
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  const handleRowClick = (index: number) => {
    if (expandedRows.includes(index)) {
      setExpandedRows([]);
    } else {
      setExpandedRows([index]);
    }
  };
  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full bg-white" style={styles}>
        <thead>
          <tr className='bg-black rounded-lg'>
            {columns.map((column) => (
              <th key={column.key} className="py-3 px-4 border-b-2 border-[#C3D5F124] text-left text-sm font-semibold text-gray-700">
                {column.label}
              </th>
            ))}
            {actions.length > 0 && (
              <th className="py-2 px-4 border-b-2 border-[#C3D5F124] text-left text-sm font-semibold text-gray-700">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {isLoading && <div>loading</div>}
          {data && data.length > 0 ? (
            data.map((row, index) => (
              <React.Fragment key={index}>
                <tr
                  onClick={() => {}}
                  className="cursor-pointer"
                >
                  {columns.map((column) => (
                    <td key={column.key} className="py-2 px-4 border-b border-[#C3D5F124]">
                      {column.render ? column.render(row) : row[column.key]}
                    </td>
                  ))}
                  {actions.length > 0 && (
                    <td className="py-2 px-4 border-b border-[#C3D5F124]">
                      {actions.map((action, actionIndex) => (
                        <button
                          key={actionIndex}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRowClick(index)
                          }}
                          className="bg-gradient-to-b from-[#3384D9] via-[#0051A6] to-[#073E66] text-white text-sm px-4 py-3 rounded-lg"
                        >
                          {action.label}
                        </button>
                      ))}
                    </td>
                  )}
                </tr>
                {expandedRows.includes(index) && (
                  <tr>
                    <td colSpan={columns.length + (actions.length > 0 ? 1 : 0)} className="py-2 px-4 border-b border-[#C3D5F124]">
                      {renderExpandedRow(row, ()=>handleRowClick(index))}
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))
            ):(
            <div>No records to show</div>
          )
          }
        </tbody>
      </table>
    </div>
  );
};

export default ExpandableTable;
