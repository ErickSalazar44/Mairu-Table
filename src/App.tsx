import styles from './App.module.css'
import DynamicTable from './components/Table/DynamicTable'

// TABLA NO CODE

// 1 - crear filas y columnas dinamicamente
// 2 - crear un input para cada celda
// 3 - crear un evento para cuando se escribe en una celda
// 4 - crear btns para agregar columnas y filas
// 5 - crear un sidebar para editar borrar y vaciar nombre de columna

function App() {
    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.header__title}>Mairu Dynamic Table</h1>
            </header>
            <DynamicTable />
        </main>
    )
}

export default App
