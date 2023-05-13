/**
 * Describe Inforiver here.
 *
 * The exported method is the entry point for your code when the function is invoked.
 *
 * Following parameters are pre-configured and provided to your function on execution:
 * @param event: represents the data associated with the occurrence of an event, and
 *                 supporting metadata about the source of that occurrence.
 * @param context: represents the connection to Functions and your Salesforce org.
 * @param logger: logging handler used to capture application logs and trace specifically
 *                 to a given execution of a function.
 */

import { exec } from "node:child_process";
import { promisify } from "node:util";

export default async function (event, context, logger) {

  logger.info('FUNCTION STARTer');

  exec("ls -la", (error, stdout, stderr) => {
    if (error) {
      logger.info(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      logger.info(`stderr: ${stderr}`);
      return;
    }
    logger.info(`STDOUT: ${stdout}`);
  });

  exec("cd ../.. && sf project retrieve preview -o ae-dev --json", (error, stdout, stderr) => {
    if (error) {
      logger.info(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      logger.info(`stderr: ${stderr}`);
      return;
    }
    logger.info(`STDOUT: ${stdout}`);
  });

  //logger.info(`Invoking Inforiver with payload ${JSON.stringify(event.data || {})}`);

  //const results = await context.org.dataApi.query('SELECT Id, Name FROM Account');
  //results = result;

  //logger.info(JSON.stringify(results));

  logger.info('FUNCTION END');

  // Connect to org
  // Retrieve metadata status
  // feed the salesforce object user sessions


  return false;
}