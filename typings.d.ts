export interface Post {
    _id: string,
    _createdAt: string,
    title: string,
    author: {
        name: string,
        image: strng
    },
    description: string,
    mainImage: {
        assets: {
            url: string
        }
    },
    slug: {
        current: string
    },
    body: [object]
}