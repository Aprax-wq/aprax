const Bot = require("./src/functions/Client.js");
const client = process.client = new Bot({ disableMentions: "everyone", ignoreDirect: true, ignoreRoles: true, fetchAllMembers: true }).start();