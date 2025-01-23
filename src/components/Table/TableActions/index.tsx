import { Add } from '../../icons'

interface TableActionsProps {
    handleAddRow: () => void
    handleAddColumn: () => void
}

export default function TableActions({
    handleAddRow,
    handleAddColumn,
}: TableActionsProps) {
    return (
        <>
            <button
                onClick={handleAddRow}
                className='add__row action'
            >
                <Add />
            </button>
            <button
                onClick={handleAddColumn}
                className='add__column action'
            >
                <Add />
            </button>
        </>
    )
}
