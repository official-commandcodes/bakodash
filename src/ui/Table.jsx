import { createContext } from 'react';
import Select from './Select';

const TableContext = createContext();

const Table = ({ children }) => {
  return (
    <TableContext.Provider>
      <div className="p-1 md:px-10 md:py-3">{children}</div>
    </TableContext.Provider>
  );
};

function Title({ title }) {
  return (
    <h3 className="text-sm font-bold tracking-wider md:text-xl">
      {title}
    </h3>
  );
}

function Selector() {
  return <Select />;
}

Table.Title = Title;
Table.Selector = Selector;

export default Table;
