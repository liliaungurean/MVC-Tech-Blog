const { User } = require('../models');

const userData = [
    {
        username: "hanna_bou",
        twitter: "hannab",
        github: "hannab",
        email: "hannab@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "matt_b",
        twitter: "mathewb",
        github: "mathewb",
        email: "mathewb@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "shane_blume",
        twitter: "shaneb",
        github: "shaneblume",
        email: "shaunblume@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "annag",
        twitter: "annag",
        github: "leenorris",
        email: "annag@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "tanya_toms",
        twitter: "tanyatoms",
        github: "tanyatoms",
        email: "tanyatoms@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "louisk",
        twitter: "louisk",
        github: "louiskrow",
        email: "louiskrow@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;