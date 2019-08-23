// Generated by CoffeeScript 2.4.1
(function() {
  var c, cliArguments, errLog, genServiceFilesProcess, log, startupmodule, successLog;

  startupmodule = {
    name: "startupmodule"
  };

  //region node_modules
  c = require("chalk");

  //endregion

  //log Switch
  log = function(arg) {
    if (allModules.debugmodule.modulesToDebug["startupmodule"] != null) {
      console.log("[startupmodule]: " + arg);
    }
  };

  //region internal variables
  errLog = function(arg) {
    return console.log(c.red(arg));
  };

  successLog = function(arg) {
    return console.log(c.green(arg));
  };

  genServiceFilesProcess = null;

  cliArguments = null;

  //endregion

  //#initialization function  -> is automatically being called!  ONLY RELY ON DOM AND VARIABLES!! NO PLUGINS NO OHTER INITIALIZATIONS!!
  startupmodule.initialize = function() {
    log("startupmodule.initialize");
    genServiceFilesProcess = allModules.genservicefilesprocessmodule;
    return cliArguments = allModules.cliargumentsmodule;
  };

  //region internal functions

  //endregion

  //region exposed functions
  startupmodule.cliStartup = async function() {
    var done, e, err;
    log("startupmodule.cliStartup");
    try {
      e = cliArguments.extractArguments();
      // console.log(chalk.yellow("caught arguments are: " + args._))
      done = (await genServiceFilesProcess.execute(e.machineConfig, e.outputDirectory));
      if (done) {
        return successLog('All done!');
      }
    } catch (error) {
      err = error;
      errLog("Error!");
      console.log(err);
      return console.log("\n");
    }
  };

  //endregion exposed functions
  module.exports = startupmodule;

}).call(this);
