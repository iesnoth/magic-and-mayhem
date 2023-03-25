Role tutorial: https://code.pieces.app/blog/role-based-access-systems-in-nodejs

Changelog styling: https://broadinstitute.github.io/warp/docs/contribution/contribute_to_warp/changelog_style/

PERN tutorial: https://www.youtube.com/watch?v=ldYcgPKEZC8&t=670s


Configuration/Middleware - Where we configure those dependency packages
express.json() and express.urlencoded(...) - Configuration for body-parser, which parses request bodies that come in
Root - A GET for the root route ('/'), responding with a simple welcome message
Listen - Where we tell our app what port to listen for connections on

install sequelize with
"npm i sequelize"

install native Postgres drivers by running the following:
"npm i pg pg-hstore"

### CLI commands
to install: npm i -g sequelize-cli
sequelize init:config- makes a configuration json file
sequelize init:models- makes index.js in models folder
sequelize init:migrations- makes migrations folder
sequelize model:generate- makes models
    NOTE: do not put spaces between -- and the word after it
sequelize db:migrate- initialize after the model and migration are set up
sequelize seed:generate --name 'NAME'= creates a seeder folder with a new file in it
sequelize migration:generate --name <migration name>- creates a migration skeleton
sequelize db:migrate:undo- undoes last migration
