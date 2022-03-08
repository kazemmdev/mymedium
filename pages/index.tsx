import Head from 'next/head'
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import PostBox from "../components/PostBox";
import {sanityClient} from "../sanity.config";
import {Post} from "../typings";

interface Props {
    posts: [Post]
}

export default function Home({posts}: Props) {

    return (
        <div className="">
            <Head>
                <title>Medium Blog</title>
                <link rel="icon" href="https://medium.com/favicon.ico"/>
            </Head>
            <Header color="bg-teal-100"/>
            <HeroBanner/>
            <div className="w-full max-w-7xl mx-auto py-9">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6 ">
                    {posts.map(post => <PostBox post={post} key={post._id}/>)}
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async () => {
    const query = `*[_type=="post"]{_id, title, author -> { name,  image }, description, mainImage, slug }`;

    const posts = await sanityClient.fetch(query);

    return {
        props: {
            posts
        }
    }
}