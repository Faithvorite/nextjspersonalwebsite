import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
    const quantity = useSelector((state) => state.cart.quantity);

    return (
        <>
        <div className={styles.container}>
            <div className={styles.logo}>Faith Nguyen</div>
            <div className={styles.items}>
            <Link href="/" passHref>
                <div className={styles.item}>Home</div>
                </Link>
                <div className={styles.item}>Gallery</div>
                <div className={styles.item}>About</div>
                <Link href="/cart" passHref>
                <div className={styles.cartitem}>
                    <div className={styles.cart}>&#9750;</div>
                    <div className={styles.counter}>{quantity}</div>
                </div>
                </Link>
            </div>
        </div>
        </>
    )
}

export default Navbar;