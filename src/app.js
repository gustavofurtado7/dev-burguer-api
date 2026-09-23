import express from 'express'

import routes from './routes.js'

const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use(routes)


app.use((err, req, res, next) => {

    console.log(err)


    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {

        return res.status(400).json({
            error: 'Erro no JSON enviado.',
            message: 'Verifique a sintaxe do JSON e tente novamente.'
        })
    }

    // Outros erros
    return res.status(500).json({
        error: 'Erro interno do servidor.',
        message: err.message
    })
})

export default app