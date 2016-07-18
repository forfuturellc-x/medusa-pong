/**
 * The MIT License (MIT)
 * Copyright (c) 2016 GochoMugo <mugo@forfuture.co.ke>
 * Copyright (c) 2016 Forfuture, LLC <we@forfuture.co.ke>
 *
 * The 'ping' plugin.
 */


exports = module.exports = {
    run,
    setup,
    teardown,
    help,
};


// module variables
var bot;


function setup(b, done) {
    bot = b;
    return done(null);
}


function run(payload, done) {
    const store = bot.storage.get("memory");
    var hits = store.get("hits") || 0;
    const sender = "Mr. "  + (payload.args[0] || "Anonymous");

    store.put("hits", ++hits);
    return done(null, {
        type: "text",
        text: bot.config.replyMessage  + " #" + hits + " for " + sender,
    });
}


function teardown(done) {
    return done(null);
}


function help(payload, done) {
    const info=`
ping <name>
    Ping back with your name. e.g. ping Heisenberg
`;
    return done(null, {
        type: "text",
        text: info,
    });
}
