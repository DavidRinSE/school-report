const Cloudant = require('cloudant');
const dbJson = require('./database.json');
const appSettings = {
  cloudant_db_name: 'genericSchool'
}


module.exports = class DB {
  /**
   *Use Object.db to access document object
   *Function list available here https://github.com/apache/couchdb-nano#document-functions
   *Can't access database functions, so no new sheets :/
   */
  constructor(){
    this.db = this.dbCloudantConnect()
  }
  dbCloudantConnect() {
    return Cloudant({url: dbJson.url}, ((err, cloudant) => {
        if (err) {
          console.error('Connect failure: ' + err.message + ' for Cloudant DB: ' +
            appSettings.cloudant_db_name);
        } else {
          let db = this.loadDB(cloudant)
          console.info('Connect success! Connected to DB: ' + appSettings.cloudant_db_name);
        }
      }))
  }

  async loadDB(cloudant) {
    await cloudant.db.create(appSettings.cloudant_db_name);
    return cloudant.use(appSettings.cloudant_db_name)
  }
}