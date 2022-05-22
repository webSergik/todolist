import nodemailer from 'nodemailer';

export const sendActivationMail = async (to, link) => {
	// Отработать ошибки посылки почты!
	// Сделать рассылку раз в день!
	let transporter = nodemailer.createTransport({
		host: process.env.SMTP_HOST,
		port: Number(process.env.SMTP_PORT),
		secure: false, //TODO Настроить безопасный вход!
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASSWORD,
		},
	});

	//TODO оформить нормально писмо!

	await transporter.sendMail({
		from: process.env.SMTP_USER,
		to,
		subject: `Account activation for ${process.env.API_URL}`,
		html: `
      <div>
        <h4>To activate follow the link</h4>
        <a href="${link}">${link}</a>
      </div>
    `,
	});
};
