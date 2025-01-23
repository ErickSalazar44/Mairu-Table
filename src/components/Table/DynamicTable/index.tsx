import { useState } from 'react'
import './index.css'
import { useDynamicTable } from '../../../hooks/useDynamicTable'
import SideBarOptions from '../SideBarOptions'
import TableHeaderCell from '../TableHeaderCell'
import Cell from '../Cell'
import TableActions from '../TableActions'

const columnas = 5
const filas = 12

// TABLA NO CODE

// 1 - crear filas y columnas dinamicamente
// 2 - crear un input para cada celda
// 3 - crear un evento para cuando se escribe en una celda
// 4 - crear btns para agregar columnas y filas
// 5 - crear un sidebar para editar borrar y vaciar nombre de columna

function DynamicTable() {
    const {
        columns,
        rows,
        handleChangeRow,
        handleChangeColumn,
        handleAddColumn,
        handleAddRow,
        handleDeleteColumn,
        handleClearColumn,
    } = useDynamicTable(columnas, filas)

    const [openSideBar, setOpenSideBar] = useState(false)
    const [selectedColumn, setSelectedColumn] = useState({
        name: '',
        index: 0,
    })

    const handleEditColumn = ({ col, i }: { col: string; i: number }) => {
        setSelectedColumn({ name: col, index: i })
        if (openSideBar) return
        setOpenSideBar(true)
    }

    return (
        <>
            <div className='table-container'>
                <table className='table'>
                    <thead className='table-head'>
                        <tr>
                            {columns.map((col, i) => (
                                <TableHeaderCell
                                    key={i}
                                    column={col}
                                    onEdit={() => handleEditColumn({ col, i })}
                                    onChange={(e) =>
                                        handleChangeColumn(i, e.target.value)
                                    }
                                />
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, i) => (
                            <tr key={i}>
                                {row.map((cel, j) => (
                                    <td key={j}>
                                        <Cell
                                            value={cel}
                                            onChange={(e) =>
                                                handleChangeRow(
                                                    i,
                                                    j,
                                                    e.target.value
                                                )
                                            }
                                            placeholder='Empty Cell'
                                        />
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                    <TableActions
                        handleAddRow={handleAddRow}
                        handleAddColumn={handleAddColumn}
                    />
                </table>
            </div>

            {openSideBar && (
                <SideBarOptions
                    onCloseSideBar={() => setOpenSideBar(false)}
                    onSave={handleChangeColumn}
                    onClearColumn={handleClearColumn}
                    selectedColumn={selectedColumn}
                    onDeleteColumn={handleDeleteColumn}
                />
            )}
        </>
    )
}

export default DynamicTable
