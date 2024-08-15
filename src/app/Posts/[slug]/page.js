import Markdown from "markdown-to-jsx"
import getPostMetadata from "@/utils/getPostMetadata"
import React from "react"
import fs from 'fs';
import matter from "gray-matter";
import '/styles/mdx-formatter.scss';
import '/styles/variables.scss';
import '/styles/globals.scss'
import dayjs from 'dayjs';
import Giscus from "@/components/Giscus";

function getPostContent(slug) {
    const folder = 'Posts/'
    const file = folder + `${slug}.mdx`
    const content = fs.readFileSync(file, 'utf8');

    const matterResult = matter(content);
    return matterResult;
}

export const generateStaticParams = async () => {
    const posts = await getPostMetadata('Posts');
    return posts.map((post) => ({ slug: post.slug }));
}

// 탭 이름 설정
export async function generateMetadata({ params, searchParams }) {
    const id = params?.slug ? params?.slug : ' '
    return {
        title: `${id.replaceAll('_', ' ')}`
    }
}

export default function PostPage(props) {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    console.log(post);

    return (
        <div>
            <div className="w-full p-16">
                <h1 className="text-center mb-3 text-5xl leading-tight">{post.data.title}</h1>
                <p className="text-center">{dayjs(post.data.date).format('YYYY.MM.DD')}</p>
            </div>

            <div className="mdx-formatter">
                <Markdown>{post.content}</Markdown>
            </div>

            <Giscus></Giscus>
        </div>
        
    )
}