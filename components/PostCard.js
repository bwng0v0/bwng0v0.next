'use client'
import Link from "next/link";
import styles from '@/components/PostCard.module.scss'
import dayjs from 'dayjs';
import { ChevronRight } from 'lucide-react';
import { useState } from "react";

export default function PostCard(props) {
    const { post } = props;
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <Link href={`/Posts/${post.slug}`}>
            <div className={styles.ContentBox} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <div className={styles.Left}>
                    <h1 className={styles.Title}>{post.title}</h1>
                    <p className={styles.Text}>{post.description}</p>
                    <p className={styles.Date}>{dayjs(post.date).format('YYYY.MM.DD')}</p>
                </div>
            </div>
        </Link>
    )
}