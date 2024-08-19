import Link from 'next/link';
import styles from './LinkButton.module.css';


export default function LinkButton(props) {
    console.log(props);
    return (
        <>
            <Link href={props.href}
                className={styles.default}>{props.children}</Link>
        </>
    );
}
