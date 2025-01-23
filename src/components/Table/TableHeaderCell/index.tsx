import { Bars2 } from '../../icons'
import Cell from '../Cell'
import styles from './index.module.css'

interface TableHeaderCellProps {
    column: string
    onEdit: () => void
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function TableHeaderCell({ column, onEdit, onChange }: TableHeaderCellProps) {
    return (
        <th>
            <div className={styles.headerCell}>
                <Cell
                    value={column}
                    onChange={onChange}
                    className={styles.headerInput}
                    placeholder='Column name'
                />
                <button onClick={onEdit}>
                    <Bars2 />
                </button>
            </div>
        </th>
    )
}

export default TableHeaderCell
