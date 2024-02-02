const config = {
    deploy: {
        'host': [
            '10.1.10.125'
        ],
        'user': 'fama',
        'ref': 'origin/main',
        'repo': 'git@github.com:phoenixreisen/routenverlauf-backend.git',
    }
}

module.exports = {
    apps: [{
        name: "routenplanung",
        script: './dist/server.js',
        exec_mode: 'cluster',
        instances: 4,

        env: {
            NODE_ENV: 'production',
            RP_HOST: '10.1.10.125',
            RP_PORT: 3000,
        },
    }, {
        name: "routenplanung-staging",
        script: './dist/server.js',
        env: {
            NODE_ENV: 'staging',
            RP_HOST: '10.1.10.125',
            RP_PORT: 4000,
        },
    }],

    deploy: {
        production: {
            ...config.deploy,
            'path': '/var/www/routenplanung-production',
            'post-deploy': 'source ~/.profile && npm run pm2-deploy:prod:post && npm run pm2-deploy:prod:env',
        },
        staging: {
            ...config.deploy,
            'path': '/var/www/routenplanung-staging',
            'post-deploy': 'source ~/.profile && npm run pm2-deploy:staging:post && npm run pm2-deploy:staging:env',
        }
    }
};