import { Column, ColumnProps } from 'primereact/column'
import { DataTable, DataTableValueArray } from 'primereact/datatable'
import React from 'react'

interface PropsTable<T> {
  columnsConfig: ColumnProps[]
  data: T
  header: React.JSX.Element
  globalFilter: string
  className?: string
  headerClassName?: string
  row?: number
  loading?: boolean
}

const Table = <T extends DataTableValueArray | undefined>({
  columnsConfig,
  data,
  header,
  globalFilter,
  className,
  row,
  loading,
  headerClassName,
}: PropsTable<T>) => {
  return (
    <>
      <DataTable
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        paginator
        value={data}
        loading={loading}
        rows={row ? row : 5}
        globalFilter={globalFilter}
        resizableColumns
        header={header}
        // Puede hacer quie aparezca el scroll cuando el max width es menor
        className={` ${className} font-robotoSlab shadow-lg font-robotoSlab_300 w-full`}
      >
        {columnsConfig.map((column, index) => (
          <Column
            key={`table-${index}-${column}`}
            sortable={column.sortable}
            className="h-[4rem] border text-text_primary/80 border-bg_six/10 p-2 hover:bg-bg_secondary/10 transition font-robotoSlab_400 "
            resizeable
            headerClassName={`${headerClassName}`}
            field={column.field}
            align={'center'}
            body={column.body}
            header={column.header}
          />
        ))}
      </DataTable>
    </>
  )
}

export default Table
