import styles from './index.module.css'
interface CellProps {
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder: string
    className?: string
}

function Cell({ value, onChange, placeholder, className }: CellProps) {
    return (
        <input
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`${styles.cell} ${className}`}
            type='text'
        />
    )
}

export default Cell
