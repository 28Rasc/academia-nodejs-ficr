const nodemailer = require('nodemailer')
const mailConfig = require('../config/mailConfig')

export default nodemailer.createTransport(mailConfig);
