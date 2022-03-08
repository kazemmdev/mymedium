import {urlFor} from "../sanity.config";
import Link from "next/link";

const PostBox = ({post}: any) => {
    return (
        <Link href={`/post/${post.slug.current}`}>
            <div className="cursor-pointer border rounded-lg group overflow-hidden">
                <img className="h-52 w-full object-cover group-hover:scale-105 transition-transform ease-in-out duration-200"
                     src={urlFor(post.mainImage).url()} alt="image of post"/>
                <div className="flex justify-between p-5">
                    <div className="pr-2">
                        <h3 className="text-lg font-bold pb-2">{post.title}</h3>
                        <p className="text-gray-600">{post.description}</p>
                    </div>
                    <img className="w-12 h-12 rounded-full my-4"
                         src={urlFor(post.author.image).url()} alt=""/>
                </div>
            </div>
        </Link>
    );
}

export default PostBox;