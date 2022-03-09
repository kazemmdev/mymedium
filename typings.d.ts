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
    body: [object],
    comments: Comment[]
}

export interface Comment {
    _id: string,
    _type: string,
    _rev: string,
    approved: boolean,
    message: string,
    email: string,
    name: string,
    post: {
        _ref: string,
        _type: string
    }
    _createdAt: string,
    _updatedAt: string,
}