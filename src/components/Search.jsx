import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router";

export function Search({ search }) {
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input 
                className={styles.searchInput} 
                type="text" 
                value={search} 
                placeholder="Tittle"
                aria-label="Search Movies"
                onChange={(e) => {
                    const value = e.target.value;
                    history.push("?search=" + value);
                }} />
                <FaSearch className={styles.searchButton} size={20} color="black" />
            </div>
        </form>
    )
}
