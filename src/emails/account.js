const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'konstantinchist@yandex.ru',
        subject: 'Thanks for joing in!',
        text: `Weclome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'konstantinchist@yandex.ru',
        subject: 'Sorry for your cancelation.',
        text: `Hello, ${name}! I'm so sorry for leaving us. Please, let us know, why are you canceling your accont.`
    })
}


module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}