import styles from './button.module.css';


export default function Button(props) {
    return (
        <>
            <button
                type="button"
                className={styles.error}
            >
                {props.children}
            </button>
        </>
    );
}
