module.exports = {
    apps: [{
        name:"namehere",
        script:"./app.js",
        watch: true,
        exec_mode:"fork",
        env:{
            NODE_ENV:"production"
        }
    }]
}