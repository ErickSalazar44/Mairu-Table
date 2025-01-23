import { useState } from 'react'

const MockDataColumns = [
    'Id',
    'Nombres',
    'Correo Electrónico',
    'Teléfono',
    'Dirección',
    'Estado',
]

const MockDataRows = [
    [
        '01',
        'John',
        'john@example.com',
        '+1 (123) 456-7890',
        '123 Main St.',
        'NY',
    ],
    [
        '02',
        'Jane',
        'jane@example.com',
        '+1 (123) 456-7890',
        '456 Oak St.',
        'CA',
    ],
    ['03', 'Bob', 'bob@example.com', '+1 (123) 456-7890', '789 Elm St.', 'TX'],
    [
        '04',
        'Alice',
        'alice@example.com',
        '+1 (987) 654-3210',
        '321 Pine St.',
        'FL',
    ],
    [
        '05',
        'Charlie',
        'charlie@example.com',
        '+1 (555) 123-4567',
        '654 Cedar Ave.',
        'IL',
    ],
    [
        '06',
        'Emily',
        'emily@example.com',
        '+1 (444) 987-6543',
        '987 Birch Rd.',
        'NV',
    ],
    [
        '07',
        'Michael',
        'michael@example.com',
        '+1 (333) 654-3210',
        '456 Willow Ln.',
        'PA',
    ],
    [
        '08',
        'Sophia',
        'sophia@example.com',
        '+1 (222) 321-4567',
        '789 Maple Dr.',
        'OH',
    ],
    [
        '09',
        'David',
        'david@example.com',
        '+1 (111) 123-7890',
        '123 Spruce St.',
        'WA',
    ],
    [
        '10',
        'Olivia',
        'olivia@example.com',
        '+1 (999) 888-7777',
        '654 Fir Pl.',
        'CO',
    ],
    [
        '11',
        'Daniel',
        'daniel@example.com',
        '+1 (888) 777-6666',
        '987 Poplar St.',
        'MA',
    ],
    [
        '12',
        'Emma',
        'emma@example.com',
        '+1 (777) 666-5555',
        '321 Ash Ln.',
        'NC',
    ],
]
export const useDynamicTable = (
    initialColumns: number,
    initialRows: number
) => {
    const [columns, setColumns] = useState<string[]>(MockDataColumns)
    const [rows, setRows] = useState<string[][]>(MockDataRows)

    /* Handle Changes Inputs */

    const handleChangeRow = (row: number, col: number, value: string) => {
        setRows((prev) => {
            const newRows = prev.map((r) => [...r])
            newRows[row][col] = value
            return newRows
        })
    }

    const handleChangeColumn = (col: number, value: string) => {
        setColumns((prev) => {
            const newColumns = [...prev]
            newColumns[col] = value
            return newColumns
        })
    }

    /* Actions */
    const handleAddColumn = () => {
        setColumns((prev) => [...prev, ''])
        setRows((prev) => prev.map((row) => [...row, '']))
    }

    const handleAddRow = () => {
        setRows((prev) => [...prev, Array(columns.length).fill('')])
    }

    const handleDeleteColumn = (i: number) => {
        setColumns((prev) => prev.filter((_, index) => index !== i))
        setRows((prev) =>
            prev.map((row) => row.filter((_, index) => index !== i))
        )
    }

    const handleClearColumn = (i: number) => {
        setRows((prev) => {
            return prev.map((row) => {
                const newRow = [...row]
                newRow[i] = ''
                return newRow
            })
        })
    }

    return {
        columns,
        rows,
        handleChangeRow,
        handleChangeColumn,
        handleAddColumn,
        handleAddRow,
        handleDeleteColumn,
        handleClearColumn,
    }
}
