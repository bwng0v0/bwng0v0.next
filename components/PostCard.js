import Link from "next/link";
import styles from '@/components/PostCard.module.css'
import dayjs from 'dayjs';

export default function PostCard(props){
    const {post} = props;
    return(
        <Link href={`/Posts/${post.slug}`}>
            <div className={styles.ContentBox}>
                <div className={styles.Left}>
                <h1 className={styles.Title}>{post.title}</h1>
                <p className={styles.Text}>{post.description}</p>
                <p className={styles.Date}>{dayjs(post.date).format('YYYY.MM.DD')}</p>
                </div>
            </div>
        </Link>
    )
}