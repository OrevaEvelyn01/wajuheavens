import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ success: false, error: "All fields are required." }),
        { status: 400 }
      );
    }

    // Setup Gmail SMTP transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_SERVER_USER, // your Gmail
        pass: process.env.EMAIL_SERVER_PASSWORD, // your App Password
      },
    });

    // Build email
    const mailOptions = {
      from: process.env.EMAIL_FROM, // must match your Gmail
      replyTo: email, // so you can reply directly
      to: process.env.EMAIL_FROM, // you receive it yourself
      subject: `📩 New message from ${name}: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
      html: `
        <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      body {
        display: flex;
        padding-top: 20px;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
          "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
      }
      .wrapper {
        max-width: 95%;
        background-color: rgb(255, 255, 255);
        border-width: 1px;
        border-style: solid;
        border-color: rgba(196, 190, 190, 0.285);
        border-radius: 2px;
        padding: 10px;
      }

      .wrapper2{
      margin-top:30px;
                max-width: 95%;
                color: grey;
                text-align: center;
                font-size: 13px;

      }

      .details {
       
        border-top: 1px solid rgba(196, 190, 190, 0.715);

      }
      h1 {
        color: #073f3f;
        text-align: center;
        font-size: 0.8rem;
      }
      h2 {
        text-align: center;
      }
      p {
        font-size: 0.9rem;
                margin-bottom: 20px;

      }
      span {
        font-size: 1rem;
        font-weight: bold;
      }
    </style>
  </head>
  <body>
    <div class="wrapper">
      <h1>Waju Heavens</h1>

      <h2>A new contact form submission</h2>

      <div class="details">
        <p><span>Name: </span> ${name}</p>
        <p><span>Email: </span> ${email}</p>
        <p><span> Subject: </span> ${subject}</p>
        <p style="line-height: 26px;" ><span> Message: </span> ${message}</p>
      </div>
    </div>

    <div class="wrapper2">
      <div
       
      >
        Received on ${new Date().toLocaleString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>
    </div>
  </body>
</html>

      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({
        success: true,
        message: "✅ Message sent successfully!",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Email sending error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Failed to send message. Please try again later.",
      }),
      { status: 500 }
    );
  }
}
