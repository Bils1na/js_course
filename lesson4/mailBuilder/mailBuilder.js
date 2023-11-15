"use strict";

//ES5
// function MailBuilder(msg) {
//     this.msg = msg;
// }

// MailBuilder.prototype.getBuiltMail = function() {
//     return `
//     <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
//     <html>
//     <head>
//     <meta http-equiv="Content-Type" content="text/html; charset=utf-8" >
//     </head>
//     <body>
//         ${this.msg}
//     </body>
//     </html>
//     `;
// };

// // let builder = new MailBuilder("some text.");
// // let mail = builder.getBuiltMail();
// // console.log(mail);

// function MailWithFooterBuilder(msg, footer) {
//     MailBuilder.call(this, msg);
//     this.footer = footer;
// }
// MailWithFooterBuilder.prototype = Object.create(MailBuilder.prototype);
// MailWithFooterBuilder.prototype.constructor = MailWithFooterBuilder;

// MailWithFooterBuilder.prototype.getSectionMarkup = function (content) {
    // return `
    //     <tr>
    //         <td>
    //             ${content}
    //         </td>
    //     </tr>
    // `;
// };

// MailWithFooterBuilder.prototype.prepare = function() {
    // this.msg = `
    //     <table>
    //         <tbody style="background: lightgrey;">
    //             ${this.getSectionMarkup(this.msg)}
    //         </tbody>
    //         <tfoot style="background: green;">
    //             ${this.getSectionMarkup(this.footer)}
    //         </tfoot>
    //     </table>
    // `;
// };

// // let builder2 = new MailWithFooterBuilder("some text.", "footer");
// // builder2.prepare();
// // let mail2 = builder2.getBuiltMail();
// // console.log(mail2);

// function ProductsMailBuilder (msg, footer, products) {
//     MailWithFooterBuilder.call(this, msg, footer);
//     this.products = products;
// }
// ProductsMailBuilder.prototype = Object.create(MailWithFooterBuilder.prototype);
// ProductsMailBuilder.prototype.constructor = ProductsMailBuilder;

// ProductsMailBuilder.prototype.getProductsMarkup = function() {
    // let markup = "<tr>";
    // for (let product of this.products) {
    //     markup += `
    //         <td>
    //             <div>${product.name}</div>
    //             <img src="${product.image}" alt="${product.name}">
    //             <div>${product.price}</div>
    //         </td>
    //     `;
    // }
    // markup += "</tr>";
    // return markup;
// };

// ProductsMailBuilder.prototype.prepare = function() {
//     this.msg = `
//         <table>
//             <tbody style="background: lightgrey;">
//                 ${this.getSectionMarkup(this.msg)}
//                 ${this.getProductsMarkup()}
//             </tbody>
//             <tfoot style="background: green;">
//                 ${this.getSectionMarkup(this.footer)}
//             </tfoot>
//         </table>
//     `;
// };

// function Product(name, image, price) {
//     this.name = name;
//     this.image = image;
//     this.price = price;
// }

// let products = [
//     new Product("name1", "https://site.com/images/1.jpg", 99),
//     new Product("name2", "https://site.com/images/2.jpg", 249),
//     new Product("name3", "https://site.com/images/3.jpg", 519),
// ];

// let builder3 = new ProductsMailBuilder("buy our goods!", "sale 50%", products);
// builder3.prepare();
// let mail3 = builder3.getBuiltMail();
// console.log(mail3);

//ES6

class MailBuilder {
    constructor(msg) {
        this.msg = msg;
    }

    getBuiltMail() {
        return `
            <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
            <html>
            <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" >
            </head>
            <body>
                ${this.msg}
            </body>
            </html>
        `;
    }
}

class MailWithFooterBuilder extends MailBuilder {
    constructor(msg, footer) {
        super(msg);
        this.footer = footer;
    }

    getSectionMarkup(content) {
        return `
            <tr>
                <td>
                    ${content}
                </td>
            </tr>
        `;
    }

    prepare() {
        this.msg = `
            <table>
                <tbody style="background: lightgrey;">
                    ${this.getSectionMarkup(this.msg)}
                </tbody>
                <tfoot style="background: green;">
                    ${this.getSectionMarkup(this.footer)}
                </tfoot>
            </table>
        `;
    }
}

class ProductsMailBuilder extends MailWithFooterBuilder {
    constructor(msg, footer, products) {
        super(msg, footer);
        this.products = products;
    }

    getProductsMarkup() {
        let markup = "<tr>";
        for (let product of this.products) {
            markup += `
                <td>
                    <div>${product.name}</div>
                    <img src="${product.image}" alt="${product.name}">
                    <div>${product.price}</div>
                </td>
            `;
        }
        markup += "</tr>";
        return markup;
    }

    prepare() {
        this.msg = `
            <table>
                <tbody style="background: lightgrey;">
                    ${this.getSectionMarkup(this.msg)}
                    ${this.getProductsMarkup()}
                </tbody>
                <tfoot style="background: green;">
                    ${this.getSectionMarkup(this.footer)}
                </tfoot>
            </table>
        `;
    }
}


class Product{
    constructor(name, image, price) {
        this.name = name;
        this.image = image;
        this.price = price;
    }
}

let products = [
    new Product("name1", "https://site.com/images/1.jpg", 99),
    new Product("name2", "https://site.com/images/2.jpg", 249),
    new Product("name3", "https://site.com/images/3.jpg", 519),
];

let builder3 = new ProductsMailBuilder("buy our goods!", "sale 50%", products);
builder3.prepare();
let mail3 = builder3.getBuiltMail();
console.log(mail3);
