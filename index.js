/**
 * The MIT License (MIT)
 * Copyright (c) 2016 GochoMugo <mugo@forfuture.co.ke>
 * Copyright (c) 2016 Forfuture, LLC <we@forfuture.co.ke>
 *
 * The 'pong' plugin.
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
    return done(null, {
        type: "text",
        text: "pong",
    });
}


function teardown(done) {
    return done(null);
}

function help(payload, done) {
    const info=`
pong
    Get a ping.
`;
    return done(null, {
        type: "text",
        text: info,
    });
}
