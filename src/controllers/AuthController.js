const User = require('../models/UserModel')
const { promisify } = require('util')
const Mail = require('../lib/Mail')

class AuthController {
  async register (req, res) {
    const { email } = req.body

    try {
      if (await User.findOne({ email })) 
        return res.send({ error: 'Email já existe' })

      const user = await User.create(req.body)

      const generateToken = promisify(User.generateToken)
      
      const token = await generateToken(user.id)
      
      Mail.sendMail({
        from: 'teste Queue <queue@queuetest.com.br>',
        to: `${User.name} <${email}>`,
        subject: 'Cadastro de usuario',
        html: `Olá, ${User.name}, bem vindo ao sistema de filas`
      })
      return res.send({
        user,
        token
      })

    } catch (error) {
      console.error('Retornou um ERRO em AuthController', error )
    }
   
  }
}

module.exports = new AuthController()