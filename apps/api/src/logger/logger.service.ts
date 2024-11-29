import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class LoggerService {
  private logFilePath = path.join(__dirname, '..', 'logs', 'app.log');

  /**
   * Write a 'log' level log.
   */
  log(message: any, ...optionalParams: any[]) {
    const logMessage = this.formatMessage('LOG', message, optionalParams);
    this.writeToLogFile(logMessage);
    console.log(logMessage); // Output to console
  }

  /**
   * Write a 'error' level log.
   */
  error(message: any, ...optionalParams: any[]) {
    const logMessage = this.formatMessage('ERROR', message, optionalParams);
    this.writeToLogFile(logMessage);
    console.error(logMessage); // Output to console
  }

  /**
   * Write a 'warn' level log.
   */
  warn(message: any, ...optionalParams: any[]) {
    const logMessage = this.formatMessage('WARN', message, optionalParams);
    this.writeToLogFile(logMessage);
    console.warn(logMessage); // Output to console
  }

  /**
   * Write a 'debug' level log.
   */
  debug(message: any, ...optionalParams: any[]) {
    const logMessage = this.formatMessage('DEBUG', message, optionalParams);
    this.writeToLogFile(logMessage);
    console.debug(logMessage); // Output to console
  }

  /**
   * Write a 'verbose' level log.
   */
  verbose(message: any, ...optionalParams: any[]) {
    const logMessage = this.formatMessage('VERBOSE', message, optionalParams);
    this.writeToLogFile(logMessage);
    console.log(logMessage); // Output to console
  }

  /**
   * Write a 'fatal' level log.
   */
  fatal(message: any, ...optionalParams: any[]) {
    const logMessage = this.formatMessage('FATAL', message, optionalParams);
    this.writeToLogFile(logMessage);
    console.error(logMessage); // Output to console
  }

  /**
   * Helper function to format the log message.
   */
  private formatMessage(level: string, message: any, params: any[]): string {
    const timestamp = new Date().toISOString();
    const formattedMessage =
      typeof message === 'object' ? JSON.stringify(message) : message;
    const formattedParams =
      params.length > 0 ? ` ${JSON.stringify(params)}` : '';
    return `[${timestamp}] [${level}] ${formattedMessage}${formattedParams}`;
  }

  /**
   * Write the log message to a log file.
   */
  private writeToLogFile(message: string) {
    const logDirectory = path.dirname(this.logFilePath);

    if (!fs.existsSync(logDirectory)) {
      fs.mkdirSync(logDirectory, { recursive: true });
    }

    fs.appendFileSync(this.logFilePath, message + '\n');
  }
}
