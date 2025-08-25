import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'gestion.greffetjules@gmail.com',
        pass: 'avgpfwgzjwocblex'
    }
});

export const sendMail = async (to: string, subject: string, text: string) => {
    const mailOptions = {
        from: "Gestion Jules 👨‍💻' <gestion.greffetjules@gmail.com>",
        to,
        subject,
        text,
    };

    return transporter.sendMail(mailOptions);
};
