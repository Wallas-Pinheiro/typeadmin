import express from 'express'
import jwt from 'jsonwebtoken'

const key = 'fkdmsanfndsj45120'

const app = express()
app.use(express.json())

const credentials = {
	email: 'w@typedev.dev.com',
	senha: '123456'
}

app.post('/auth', (req, res) => {
	const { email, senha } = req.body

	if (email === credentials.email && senha === credentials.senha) {
		return res.status(200).json({
			token: jwt.sign(
				{
					email,
					role: 'admin'
				},
				key
			)
		})
	}

	return res.status(401).json({
		error: 'Erro nos dados de autenticação'
	})
})

app.listen(3000, () => console.log('Running on port 3000'))
