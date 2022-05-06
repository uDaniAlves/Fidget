import { MailAdapter, SendMailData } from '../mail-adapter';
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '4022260486a75e',
    pass: 'a5f0310be616bd',
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipa Fidget <oi@fidget.com>',
      to: 'Daniel Alves <d.alves15@gmail.com>',
      subject,
      html: body,
    });
  }
}
