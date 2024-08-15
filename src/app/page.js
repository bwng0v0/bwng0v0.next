import PostCard from '@/components/PostCard';
import getPostMetadata from '@/utils/getPostMetadata';

export default function Home() {
  const postMetadata = getPostMetadata('Posts');
  console.log(postMetadata);
  return (
    <main>
      <div>
        {postMetadata.map((post,postIndex)=>{
          return(
            <PostCard key={postIndex} post={post} />
          )
        })}
      </div>
    </main>
  );
}
