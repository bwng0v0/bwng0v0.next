import fs from 'fs';
import matter from 'gray-matter';

export default function getPostMetadata(basepath){
    const folder = basepath + '/';
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter(file => file.endsWith('.mdx'))

    //get the file data
    const posts = markdownPosts.map((filename) => {
            const fileContents = fs.readFileSync(`${basepath}/${filename}`,'utf8');
            const matterResult = matter(fileContents);
            return{
                title: matterResult.data.title,
                date : matterResult.data.date,
                description : matterResult.data.description,
                tags : matterResult.data.tags,
                slug: filename.replace('.mdx', '')
            }
        })
    return posts;
}