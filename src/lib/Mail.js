const nodemailer = require('nodemailer')
const mailConfig = require('../config/mailConfig')

module.exports = nodemailer.createTransport(mailConfig);
