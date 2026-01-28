import nodemailer from 'nodemailer';
import { printBlue, printRed } from "./utils/colorOut.js";

// 163邮箱SMTP配置
const config = {
  host: 'smtp.163.com',      // 163邮箱SMTP服务器
  port: 465,                  // SSL端口
  secure: true,               // 使用SSL
  auth: {
    user: 'zh155329471280@163.com',  // 你的163邮箱
    pass: 'XBRU2gU42k5BWVMg' // 授权码，不是密码！
  }
};

// 发送邮件函数
async function send163Email(mailOptions) {
  try {
    // 创建transporter
    const transporter = nodemailer.createTransport(config);
    
    // 验证连接
    await transporter.verify();
    printBlue('163邮箱SMTP连接验证成功');
    
    // 发送邮件
    const info = await transporter.sendMail(mailOptions);
    
    printBlue('邮件发送成功！');
    printBlue('消息ID:', info.messageId);
    printBlue('响应:', info.response);
  } catch (error) {
    printRed('发送失败:', error.message);
    if (error.responseCode) {
      printRed('错误代码:', error.responseCode);
    }
  }
}

export { send163Email }
