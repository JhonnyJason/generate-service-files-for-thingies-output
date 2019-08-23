// Generated by CoffeeScript 2.4.1
(function() {
  var c, checkDirectoryExists, fs, log, pathModule, pathhandlermodule;

  pathhandlermodule = {
    name: "pathhandlermodule"
  };

  //region node_modules
  c = require('chalk');

  fs = require("fs-extra");

  pathModule = require("path");

  //endregion

  //log Switch
  log = function(arg) {
    if (allModules.debugmodule.modulesToDebug["pathhandlermodule"] != null) {
      console.log("[pathhandlermodule]: " + arg);
    }
  };

  //region exposed variables
  pathhandlermodule.configPath = "";

  pathhandlermodule.outputDir = "";

  //endregion

  //#initialization function  -> is automatically being called!  ONLY RELY ON DOM AND VARIABLES!! NO PLUGINS NO OHTER INITIALIZATIONS!!
  pathhandlermodule.initialize = function() {
    var utl;
    log("pathhandlermodule.initialize");
    return utl = allModules.utilmodule;
  };

  //region internal functions
  checkDirectoryExists = async function(path) {
    var err, stats;
    try {
      stats = (await fs.lstat(path));
      return stats.isDirectory();
    } catch (error) {
      err = error;
      // console.log(c.red(err.message))
      return false;
    }
  };

  //endregion

  //region exposed functions
  pathhandlermodule.setOutputDirectory = async function(outputDir) {
    var exists;
    if (outputDir) {
      if (pathModule.isAbsolute(outputDir)) {
        pathhandlermodule.outputDir = outputDir;
      } else {
        pathhandlermodule.outputDir = pathModule.resolve(process.cwd(), outputDir);
      }
    } else {
      throw "Trying to set undefined or empty directory for the configuration output.";
    }
    exists = (await checkDirectoryExists(pathhandlermodule.outputDir));
    if (!exists) {
      throw new Error("Provided directory " + outputDir + " does not exist!");
    }
  };

  pathhandlermodule.setConfigFilePath = function(configPath) {
    if (configPath) {
      if (pathModule.isAbsolute(configPath)) {
        return pathhandlermodule.configPath = configPath;
      } else {
        return pathhandlermodule.configPath = pathModule.resolve(process.cwd(), configPath);
      }
    } else {
      throw "Trying to set undefined or empty config path.";
    }
  };

  pathhandlermodule.getConfigRequirePath = function() {
    return pathhandlermodule.configPath;
  };

  pathhandlermodule.getSocketOutputPath = function(name) {
    log("pathhandlermodule.getSocketOutputPath");
    return pathModule.resolve(pathhandlermodule.outputDir, name + ".socket");
  };

  pathhandlermodule.getServiceOutputPath = function(name) {
    log("pathhandlermodule.getServiceOutputPath");
    return pathModule.resolve(pathhandlermodule.outputDir, name + ".service");
  };

  //endregion
  module.exports = pathhandlermodule;

}).call(this);
