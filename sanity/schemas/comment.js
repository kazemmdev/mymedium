export default {
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
        },
        {
            name: 'approved',
            title: 'Approved',
            type: 'boolean',
        },
        {
            name: 'email',
            type: 'string',
        },
        {
            name: 'message',
            type: 'string',
        },
        {
            name: 'post',
            type: 'reference',
            to: [{type: "post"}]
        },
    ],
}
