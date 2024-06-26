const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "testdeepali775@gmail.com",
        pass: process.env.SMTP_PASS,
    },
    tls: {
        ciphers: "SSLv3",
    },
});

const sendEmailOtp = async (otp_params) => {
    try {
        const msg = {
            to: otp_params.email_address,
            from: "testdeepali775@gmail.com",
            subject: "mobile verification",
            html: `<!DOCTYPE html
            PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns:v="urn:schemas-microsoft-com:vml">
        
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;">
            <!--[if !mso]-->
            <!-- -->
            <link href="https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700" rel="stylesheet">
            <link href="https://fonts.googleapis.com/css?family=Quicksand:300,400,700" rel="stylesheet">
            <!-- <![endif]-->
        
            <title>Material Design for Bootstrap</title>
        
            <style type="text/css">
                body {
                    width: 100%;
                    background-color: #ffffff;
                    margin: 0;
                    padding: 0;
                    -webkit-font-smoothing: antialiased;
                    mso-margin-top-alt: 0px;
                    mso-margin-bottom-alt: 0px;
                    mso-padding-alt: 0px 0px 0px 0px;
                }
        
                p,
                h1,
                h2,
                h3,
                h4 {
                    margin-top: 0;
                    margin-bottom: 0;
                    padding-top: 0;
                    padding-bottom: 0;
                }
        
                span.preheader {
                    display: none;
                    font-size: 1px;
                }
        
                html {
                    width: 100%;
                }
        
                table {
                    font-size: 14px;
                    border: 0;
                }
        
                /* ----------- responsivity ----------- */
        
                @media only screen and (max-width: 640px) {
        
                    /*------ top header ------ */
                    .main-header {
                        font-size: 20px !important;
                    }
        
                    .main-section-header {
                        font-size: 28px !important;
                    }
        
                    .show {
                        display: block !important;
                    }
        
                    .hide {
                        display: none !important;
                    }
        
                    .align-center {
                        text-align: center !important;
                    }
        
                    .no-bg {
                        background: none !important;
                    }
        
                    /*----- main image -------*/
                    .main-image img {
                        width: 440px !important;
                        height: auto !important;
                    }
        
                    /* ====== divider ====== */
                    .divider img {
                        width: 440px !important;
                    }
        
                    /*-------- container --------*/
                    .container590 {
                        width: 440px !important;
                    }
        
                    .container580 {
                        width: 400px !important;
                    }
        
                    .main-button {
                        width: 220px !important;
                    }
        
                    /*-------- secions ----------*/
                    .section-img img {
                        width: 320px !important;
                        height: auto !important;
                    }
        
                    .team-img img {
                        width: 100% !important;
                        height: auto !important;
                    }
                }
        
                @media only screen and (max-width: 479px) {
        
                    /*------ top header ------ */
                    .main-header {
                        font-size: 18px !important;
                    }
        
                    .main-section-header {
                        font-size: 26px !important;
                    }
        
                    /* ====== divider ====== */
                    .divider img {
                        width: 280px !important;
                    }
        
                    /*-------- container --------*/
                    .container590 {
                        width: 280px !important;
                    }
        
                    .container590 {
                        width: 280px !important;
                    }
        
                    .container580 {
                        width: 260px !important;
                    }
        
                    /*-------- secions ----------*/
                    .section-img img {
                        width: 280px !important;
                        height: auto !important;
                    }
                }
            </style>
            <!-- [if gte mso 9]><style type=”text/css”>
                    body {
                    font-family: arial, sans-serif!important;
                    }
                    </style>
                <![endif]-->
        </head>
        
        
        <body class="respond" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
            <!-- pre-header -->
            <table style="display:none!important;">
                <tbody>
                    <tr>
                        <td>
                            <div
                                style="overflow:hidden;display:none;font-size:1px;color:#ffffff;line-height:1px;font-family:Arial;maxheight:0px;max-width:0px;opacity:0;">
                                Pre-header for the newsletter template
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- pre-header end -->
            <!-- header -->
            <table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="ffffff">
        
                <tbody>
                    <tr>
                        <td align="center">
                            <table border="0" align="center" width="590" cellpadding="0" cellspacing="0" class="container590">
        
                                <tbody>
                                    <tr>
                                        <td height="25" style="font-size: 25px; line-height: 25px;">&nbsp;</td>
                                    </tr>
        
                                    <tr>
                                        <td align="center">
        
                                            <table border="0" align="center" width="590" cellpadding="0" cellspacing="0"
                                                class="container590">
        
                                                <tbody>
                                                    <tr>
                                                        <td align="center" height="70" style="height:70px;">
                                                            <a href=""
                                                                style="display: block; border-style: none !important; border: 0 !important;"><img
                                                                    width="100" border="0" style="display: block; width: 100px;"
                                                                    src="http://52.66.60.36:4200/assets/images/logo.png"
                                                                    alt=""></a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
        
                                    <tr>
                                        <td height="25" style="font-size: 25px; line-height: 25px;">&nbsp;</td>
                                    </tr>
        
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- end header -->
        
            <!-- big image section -->
            <table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="ffffff" class="bg_color">
        
                <tbody>
                    <tr>
                        <td align="center">
                            <table border="0" align="center" width="590" cellpadding="0" cellspacing="0" class="container590">
                                <tbody>
                                    <tr>
                                        <td height="20" style="font-size: 20px; line-height: 20px;">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td align="center"
                                            style="color: #343434; font-size: 24px; font-family: Quicksand, Calibri, sans-serif; font-weight:700;letter-spacing: 3px; line-height: 35px;"
                                            class="main-header">
                                            <div style="line-height: 35px">Mobile OTP Varification
                                            </div>
                                        </td>
                                    </tr>
        
                                    <tr>
                                        <td height="10" style="font-size: 10px; line-height: 10px;">&nbsp;</td>
                                    </tr>
        
                                    <tr>
                                        <td align="center">
                                            <table border="0" width="40" align="center" cellpadding="0" cellspacing="0"
                                                bgcolor="eeeeee">
                                                <tbody>
                                                    <tr>
                                                        <td height="2" style="font-size: 2px; line-height: 2px;">&nbsp;</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
        
                                    <tr>
        
                                        <td align="center"
                                            style="color: #343434; font-size: 24px; font-family: Quicksand, Calibri, sans-serif; font-weight:700;letter-spacing: 3px; line-height: 35px;"
                                            class="main-header">
        
                                            ${otp_params.otp} </td>
                                    </tr>
        
                                    <tr>
                                        <td align="center">
                                            <table border="0" width="400" align="center" cellpadding="0" cellspacing="0"
                                                class="container590">
                                                <tbody>
                                                    <tr>
                                                        <td align="center"
                                                            style="color: #888888; font-size: 16px; font-family: 'Work Sans', Calibri, sans-serif; line-height: 24px;">
        
        
                                                            <div style="line-height: 24px">Mobile number verification code, will be valid
                                                                for 2 minutes. Please do not share this code with anyone.</div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
        
                                    <tr>
                                        <td height="25" style="font-size: 25px; line-height: 25px;">&nbsp;</td>
                                    </tr>
        
        
        
        
                                </tbody>
                            </table>
        
                        </td>
                    </tr>
        
                </tbody>
            </table>
            <!-- end section -->
        
            <!-- contact section -->
        
            <!-- end section -->
        
            <!-- footer ====== -->
            <table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="f4f4f4">
        
                <tbody>
                    <tr>
                        <td height="25" style="font-size: 25px; line-height: 25px;">&nbsp;</td>
                    </tr>
        
                    <tr>
                        <td align="center">
        
                            <table border="0" align="center" width="590" cellpadding="0" cellspacing="0" class="container590">
        
                                <tbody>
                                    <tr>
                                        <td>
                                            <table border="0" align="left" cellpadding="0" cellspacing="0"
                                                style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"
                                                class="container590">
                                                <tbody>
                                                    <tr>
                                                        <td align="left"
                                                            style="color: #aaaaaa; font-size: 14px; font-family: 'Work Sans', Calibri, sans-serif; line-height: 24px;">
                                                            <div style="line-height: 24px;">
        
                                                                <span style="color: #333333;">This is system genrated mail
                                                                    please do not reply back on this email address.</span>
        
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
        
                                            <table border="0" align="left" width="5" cellpadding="0" cellspacing="0"
                                                style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"
                                                class="container590">
                                                <tbody>
                                                    <tr>
                                                        <td height="20" width="5" style="font-size: 20px; line-height: 20px;">
                                                            &nbsp;</td>
                                                    </tr>
                                                </tbody>
                                            </table>
        
        
                                        </td>
                                    </tr>
        
                                </tbody>
                            </table>
                        </td>
                    </tr>
        
                    <tr>
                        <td height="25" style="font-size: 25px; line-height: 25px;">&nbsp;</td>
                    </tr>
        
                </tbody>
            </table>
            <!-- end footer ====== -->
        
        
        
        </body>
        
        </html>`,
        };
        const data = await transporter.sendMail(msg);
        return true;
    } catch (error) {
        console.log("Error for nodemailar", error);
        return false;
    }
};

const sendEmailLeadNo = async (email, lead_no, name, Data) => {
    try {
        const msg = {
            to: email,
            from: "testdeepali775@gmail.com",
            subject: `Loan Application Lead ${Data ? Data : "Gerarated"}`,
            html: `<!DOCTYPE html
            PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns:v="urn:schemas-microsoft-com:vml">
        
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;">
            <!--[if !mso]-->
            <!-- -->
            <link href="https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700" rel="stylesheet">
            <link href="https://fonts.googleapis.com/css?family=Quicksand:300,400,700" rel="stylesheet">
            <!-- <![endif]-->
        
            <title>Material Design for Bootstrap</title>
        
            <style type="text/css">
                body {
                    width: 100%;
                    background-color: #ffffff;
                    margin: 0;
                    padding: 0;
                    -webkit-font-smoothing: antialiased;
                    mso-margin-top-alt: 0px;
                    mso-margin-bottom-alt: 0px;
                    mso-padding-alt: 0px 0px 0px 0px;
                }
        
                p,
                h1,
                h2,
                h3,
                h4 {
                    margin-top: 0;
                    margin-bottom: 0;
                    padding-top: 0;
                    padding-bottom: 0;
                }
        
                span.preheader {
                    display: none;
                    font-size: 1px;
                }
        
                html {
                    width: 100%;
                }
        
                table {
                    font-size: 14px;
                    border: 0;
                }
        
                /* ----------- responsivity ----------- */
        
                @media only screen and (max-width: 640px) {
        
                    /*------ top header ------ */
                    .main-header {
                        font-size: 20px !important;
                    }
        
                    .main-section-header {
                        font-size: 28px !important;
                    }
        
                    .show {
                        display: block !important;
                    }
        
                    .hide {
                        display: none !important;
                    }
        
                    .align-center {
                        text-align: center !important;
                    }
        
                    .no-bg {
                        background: none !important;
                    }
        
                    /*----- main image -------*/
                    .main-image img {
                        width: 440px !important;
                        height: auto !important;
                    }
        
                    /* ====== divider ====== */
                    .divider img {
                        width: 440px !important;
                    }
        
                    /*-------- container --------*/
                    .container590 {
                        width: 440px !important;
                    }
        
                    .container580 {
                        width: 400px !important;
                    }
        
                    .main-button {
                        width: 220px !important;
                    }
        
                    /*-------- secions ----------*/
                    .section-img img {
                        width: 320px !important;
                        height: auto !important;
                    }
        
                    .team-img img {
                        width: 100% !important;
                        height: auto !important;
                    }
                }
        
                @media only screen and (max-width: 479px) {
        
                    /*------ top header ------ */
                    .main-header {
                        font-size: 18px !important;
                    }
        
                    .main-section-header {
                        font-size: 26px !important;
                    }
        
                    /* ====== divider ====== */
                    .divider img {
                        width: 280px !important;
                    }
        
                    /*-------- container --------*/
                    .container590 {
                        width: 280px !important;
                    }
        
                    .container590 {
                        width: 280px !important;
                    }
        
                    .container580 {
                        width: 260px !important;
                    }
        
                    /*-------- secions ----------*/
                    .section-img img {
                        width: 280px !important;
                        height: auto !important;
                    }
                }
            </style>
            <!-- [if gte mso 9]><style type=”text/css”>
                    body {
                    font-family: arial, sans-serif!important;
                    }
                    </style>
                <![endif]-->
        </head>
        
        
        <body class="respond" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
            <!-- pre-header -->
            <table style="display:none!important;">
                <tbody>
                    <tr>
                        <td>
                            <div
                                style="overflow:hidden;display:none;font-size:1px;color:#ffffff;line-height:1px;font-family:Arial;maxheight:0px;max-width:0px;opacity:0;">
                                Pre-header for the newsletter template
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- pre-header end -->
            <!-- header -->
            <p>Hello ${name}</p>
            <h1>Your Application Lead Number :${lead_no}</h1>
        
            <!-- contact section -->
        
            <!-- end section -->
        
            <!-- footer ====== -->
            <table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="f4f4f4">
        
                <tbody>
                    <tr>
                        <td height="25" style="font-size: 25px; line-height: 25px;">&nbsp;</td>
                    </tr>
        
                    <tr>
                        <td align="center">
        
                            <table border="0" align="center" width="590" cellpadding="0" cellspacing="0" class="container590">
        
                                <tbody>
                                    <tr>
                                        <td>
                                            <table border="0" align="left" cellpadding="0" cellspacing="0"
                                                style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"
                                                class="container590">
                                                <tbody>
                                                    <tr>
                                                        <td align="left"
                                                            style="color: #aaaaaa; font-size: 14px; font-family: 'Work Sans', Calibri, sans-serif; line-height: 24px;">
                                                            <div style="line-height: 24px;">
        
                                                                <span style="color: #333333;">This is system genrated mail
                                                                    please do not reply back on this email address.</span>
        
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
        
                                            <table border="0" align="left" width="5" cellpadding="0" cellspacing="0"
                                                style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"
                                                class="container590">
                                                <tbody>
                                                    <tr>
                                                        <td height="20" width="5" style="font-size: 20px; line-height: 20px;">
                                                            &nbsp;</td>
                                                    </tr>
                                                </tbody>
                                            </table>
        
        
                                        </td>
                                    </tr>
        
                                </tbody>
                            </table>
                        </td>
                    </tr>
        
                    <tr>
                        <td height="25" style="font-size: 25px; line-height: 25px;">&nbsp;</td>
                    </tr>
        
                </tbody>
            </table>
            <!-- end footer ====== -->
        
        
        
        </body>
        
        </html>`,
        };
        const data = await transporter.sendMail(msg);
        return true;
    } catch (error) {
        console.log("Error for nodemailar", error);
        return false;
    }
}

module.exports = {
    sendEmailOtp,
    sendEmailLeadNo
};
