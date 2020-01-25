export default  {
  pool: true,
  host: "smtp.mailtrap.io",//process.env.MAIL_HOST,
  port: 2525,
  secure: true,//process.env.MAIL_PORT,
  auth: {
    user: "4342534e9959aa",//process.env.MAIL_USER,
    pass: "78ee9f6afabc5a"//process.env.MAIL_PASS
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: true
  }
};