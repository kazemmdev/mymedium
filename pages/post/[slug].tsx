import {GetStaticProps} from "next";
import moment from "moment";
import PortableText from "react-portable-text";

import Header from "../../components/Header";
import {sanityClient, urlFor} from "../../sanity.config";
import {Post} from "../../typings";
import Comments from "../../components/Comments";

interface Props {
    post: Post
}

const Post = ({post}: Props) => {
    return <main>
        <Header/>
        <img className="w-full h-40 object-cover" src={urlFor(post.mainImage).url()} alt=""/>
        <article className="max-w-3xl mx-auto p-5">
            <h1 className="text-3xl font-bold mt-10 mb-3">{post.title}</h1>
            <h3 className="text-xl font-light text-gray-500 mb-3">{post.description}</h3>
            <div className="flex items-center space-x-3">
                <img className="w-10 h-10 rounded-full" src={urlFor(post.author.image).url()} alt="author avatar"/>
                <div>
                    <strong>{post.author.name}</strong>
                    <p className="text-sm font-extralight ">
                        Published {moment(post._createdAt).fromNow()}
                    </p>
                </div>

            </div>
            <div className="mt-5">
                <PortableText
                    dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                    projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                    content={post.body}
                    serializers={{
                        h1: (props: any) => (
                            <h1 className="text-2xl font-bold my-5"  {...props} />
                        ),
                        h2: (props: any) => (
                            <h2 className="text-xl font-bold my-5"  {...props} />
                        ),
                        li: ({children}: any) => (
                            <li className="list-disc ml-2">{children}</li>
                        ),
                        link: ({href, children}: any) => (
                            <a className="text-blue-500 hover:underline" href={href}>{children}</a>
                        )
                    }}/>
            </div>
        </article>
        <hr className="max-w-lg mx-auto border border-yellow-500 my-5"/>
        <Comments />
    </main>;
}

export default Post;

export const getStaticPaths = async () => {
    const query = `*[_type == "post"] {_id, slug {current}}`;
    const posts = await sanityClient.fetch(query)

    const paths = posts.map((post: Post) => ({
        params: {
            slug: post.slug.current
        }
    }))

    return {
        paths,
        fallback: "blocking"
    };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
    const query = `*[_type == "post" && slug.current == $slug ][0] {_id, _createdAt, title, description, mainImage, slug, body, author -> {name, image}}`
    const post = await sanityClient.fetch(query, {
        slug: params?.slug
    });

    if (!post) {
        return {
            notFound: true
        }
    }
    return {
        props: {
            post
        },
        revalidate: 5 // after 60 seconds it'll update the old cached version
    }
}