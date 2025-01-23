import { useEffect, useRef, useState } from 'react'
import './index.css'
import { Clear, Trash } from '../../icons'

export default function SideBarOptions({
    onCloseSideBar,
    onSave,
    selectedColumn,
    onDeleteColumn,
    onClearColumn,
}: {
    onCloseSideBar: () => void
    onSave: (col: number, index: string) => void
    selectedColumn: { name: string; index: number }
    onDeleteColumn: (i: number) => void
    onClearColumn: (i: number) => void
}) {
    const [name, setName] = useState(selectedColumn.name)
    const sideBar = useRef<HTMLElement>(null)

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                sideBar.current &&
                !sideBar.current.contains(event.target as Node)
            ) {
                onCloseSideBar()
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () =>
            document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <aside
            ref={sideBar}
            className='fixed-sidebar'
        >
            <header className='sidebar-header'>
                <h2 className='sidebar-title'>Columna</h2>
                <p className='sidebar-description'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequuntur, doloremque.
                </p>
            </header>
            <div className='sidebar-content'>
                <input
                    autoFocus
                    type='text'
                    className='input'
                    value={name}
                    onChange={handleChangeName}
                    placeholder='Column name'
                />

                <div className='sidebar-actions'>
                    <button
                        className='btn-action'
                        onClick={() => {
                            onClearColumn(selectedColumn.index)
                            onCloseSideBar()
                        }}
                    >
                        <Clear />
                        Vaciar Columna
                    </button>
                    <button
                        onClick={() => {
                            onDeleteColumn(selectedColumn.index)
                            onCloseSideBar()
                        }}
                        className='btn-action btn-delete'
                    >
                        <Trash />
                        Delete Column
                    </button>
                </div>
            </div>
            <footer className='sidebar-footer'>
                <button
                    onClick={() => {
                        onSave(selectedColumn.index, name)
                        onCloseSideBar()
                    }}
                    className='btn-footer'
                >
                    Guardar
                </button>
            </footer>
        </aside>
    )
}
