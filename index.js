const Discord = require('discord.js');
const { Client } = require('klasa');

new Client({
    clientOptions: {
        fetchAllMembers: false
    },
    prefix: '+',
    cmdEditing: true,
    typing: true,
    readyMessage: (client) => `${client.user.tag}, Ready to serve ${client.guilds.size} guilds and ${client.users.size} users`
}).login('NDczMTMyMjYwMDg2OTA2ODkw.DkJO6A.WpC8-vf1229YinChyZatQM3MbB0');