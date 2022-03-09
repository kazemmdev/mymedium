import sanityClient from '@sanity/client';
import type {NextApiRequest, NextApiResponse} from 'next'

const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    useCdn: process.env.NODE_ENV === "production",
    token: process.env.SANITY_API_TOKEN
}

const client = sanityClient(config);

export default async function createComment(req: NextApiRequest, res: NextApiResponse) {
    const {_id, name, email, message} = JSON.parse(req.body)
    try {
        await client.create({
            _type: "comment",
            post: {
                _type: "reference",
                _ref: _id
            },
            name,
            email,
            message
        })
    } catch (e) {
        return res.status(500).json({message: "errr", e})
    }

}
