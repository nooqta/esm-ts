
async function requiresm(esmModule) {
  try {
    return (await import(esmModule));
  } catch (error) {
    throw error;
  }
}

(function () {
  'use strict';

  module.exports = {
    requiresm
  };
}());