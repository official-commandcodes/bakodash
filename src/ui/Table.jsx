import { createContext, useContext } from 'react';
import { render } from 'react-dom';
import Empty from './Empty';

const TableContext = createContext();

const Table = ({ children, columns }) => {
  return (
    <TableContext.Provider value={{ columns }}>
      <div role="table" className="bg-white mt-2 rounded-md md:p-2">
        {children}
      </div>
    </TableContext.Provider>
  );
};

function Header({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <div
      role="row"
      className={`${columns} py-2 text-[12px] font-bold md:text-[17px]`}
    >
      {children}
    </div>
  );
}

function Row({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <div
      role="row"
      className={`${columns} bg-neutral-200 rounded-sm px-[2px] py-1 items-center hover:bg-neutral-100 text-[8px] transition-all ease-in-out duration-300 md:text-[12px]`}
    >
      {children}
    </div>
  );
}

function Body({ data, render }) {
  if (!data) return <Empty type="product" />;

  return (
    <div className="flex gap-2 flex-col py-1 mt-2 h-[25rem] overflow-y-scroll scrollbar-none">
      {data.map(render)}
    </div>
  );
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;

export default Table;
