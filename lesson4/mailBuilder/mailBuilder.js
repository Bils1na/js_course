"use strict";

function MailBuilder(msg) {
    this.msg = msg;
}

MailBuilder.prototype.getBuiltMail = function() {
    return `
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4">
    <html>
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" >
    </head>
    <body>
        ${this.msg}
    </body>
    </html>
    `;
};