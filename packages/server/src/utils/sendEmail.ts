// Use at least Nodemailer v4.1.0
import * as nodemailer from 'nodemailer';
var sgtransport=require('nodemailer-sendgrid-transport');

export const sendEmail = async (recipient: string, url: string, linkText: string) => {
    // const transporter = nodemailer.createTransport({
    //     host: 'smtp.ethereal.email',
    //     port: 587,
    //     secure:true,
    //     auth: {
    //         user: 'pv3h7mi5cg7fkrqm@ethereal.email',
    //         pass: '9ApjK5BZrFkC4Rb78Q'
    //     }
    // });

    var options={
        auth:{
            api_user:'hardik81411',
            api_key:'h97122@MODI'
        }
    }

    var client=nodemailer.createTransport(sgtransport(options));


    // Message object
    const message = {
        from: 'Sender Name <sender@example.com>',
        to: recipient,
        subject: 'Nodemailer is unicode friendly ✔',
        text: 'Hello to myself!',
        html:`<html>
                <body>
                    <p>Testing SparkPost - the world's most awesomest email service!</p>
                    <a href="${url}">${linkText}</a>
                </body>
            </html>`
    };

    client.sendMail(message, (err, info) => {
        if (err) {
            console.log(err);
            console.log('Error occurred. ' + err.message);
        }

        console.log(info);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
};

