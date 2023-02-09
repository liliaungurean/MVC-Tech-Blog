const { Post } = require('../models');

const postData = [
    {
        title: "Post 1",
        post_content: "Nobody really understood Kevin. It wasn't that he was super strange or difficult. It was more that there wasn't enough there that anyone wanted to take the time to understand him.",
        user_id: 3
    },
    {
        title: "Post 2",
        post_content: "It had been a rough day. Things hadn't gone as planned and that meant Hannah got yelled at by her boss. It didn't even matter that it wasn't her fault. When things went wrong at work, Hannah got the blame no matter the actual circumstances.",
        user_id: 1
    },
    {
        title: "Post 3",
        post_content: "Nobody really understood Kevin. It wasn't that he was super strange or difficult. It was more that there wasn't enough there that anyone wanted to take the time to understand him. ",
        user_id: 2

    },
    {
        title: "Post 4",
        post_content: "It was going to rain. The weather forecast didn't say that, but the steel plate in his hip did. He had learned over the years to trust his hip over the weatherman.",
        user_id: 5
    },
    {
        title: "post 5",
        post_content: "They rushed out the door, grabbing anything and everything they could think of they might need.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;