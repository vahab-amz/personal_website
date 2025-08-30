import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
    try {
        const { name, email, message } = await req.json();
        const time = new Date().toLocaleString();

        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'vahab.azimzadeh@gmail.com',
            subject: 'Message to contact me',
            html: `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <title>Contact Form Submission</title>
                        <style>
                            body { 
                                font-family: Arial, sans-serif; 
                                line-height: 1.6; 
                            }
                            .container { 
                                max-width: 600px; 
                                margin: 20px auto; 
                                padding: 20px;
                                color: white;
                                border-radius: 10px; 
                                background-color: #1d293d; 
                            }
                            .field { 
                                margin-bottom: 10px; 
                                color: white;
                            }
                            .label { 
                                font-weight: bold; 
                            }
                            .msg{
                                padding-left : 20px;
                            }
                            .color_white{
                                color: white
                            }
                        </style>
                    </head>
                        <body>
                            <div class="container">
                                <h2 class="color_white">New Contact Form Submission</h2>
                                <div class="field">
                                    <span class="label">Name:</span> <span>${name}</span>
                                </div>
                                <div class="field">
                                    <span class="label">Email:</span> <span>${email}</span>
                                </div>
                                <div class="field">
                                    <span class="label">Message:</span>
                                    <p class="msg">${message}</p>
                                </div>
                                <div class="field">
                                    <span class="label">Submitted At:</span> <span>${time}</span>
                                </div>
                            </div>
                        </body>
                    </html>
                    `,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json(
                { error: error.message ?? error },
                { status: 502 },
            );
        }

        return NextResponse.json(data);
    } catch (err) {
        console.error('Handler error:', err);
        return NextResponse.json(
            { error: err?.message || 'Unknown server error' },
            { status: 500 },
        );
    }
}
