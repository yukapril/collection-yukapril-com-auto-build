const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const app = new Koa()

const { exec } = require('child_process')

app.use(bodyParser())

app.use(async (ctx, next) => {
    await next()
    console.log(new Date().toJSON())
    console.log('body:', ctx.request.body)

    exec('./collection_yukapril_com.sh', (err, stdout, stderr) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(stdout)
        console.log(stderr)
    })

    ctx.response.type = 'text/plain'
    ctx.response.body = 'ok'
})

app.listen(21001)
