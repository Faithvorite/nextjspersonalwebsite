import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

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
                <Link href="/gallery" passHref>
                <div className={styles.item}>Gallery</div>
                </Link>
                <Link href="/about" passHref>
                <div className={styles.item}>About</div>
                </Link>
                <Link href="/cart" passHref>
                <div className={styles.cartitem}>
                    <FontAwesomeIcon className={styles.cart} icon={faShoppingBasket} />
                    <div className={styles.counter}>{quantity}</div>
                </div>
                </Link>
            </div>
        </div>
        </>
    )
}

export default Navbar;