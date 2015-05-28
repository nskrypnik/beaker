/**
 * @author Adam Meadows [@job13er](https://github.com/job13er)
 * @copyright 2015 Cyan, Inc. All rights reserved
 */

'use strict';

require('../typedefs');

module.exports = {

    /**
     * Throw a CliError
     * @param {String} message - the error message
     * @param {Number} [exitCode] - the exit code for CLI command
     * @throws {CliError}
     */
    throwCliError: function (message, exitCode) {
        throw {
            message: message,
            exitCode: exitCode,
        };
    },
};
