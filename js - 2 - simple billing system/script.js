let customerName = prompt("Enter Customer Name");

let totalBill = 0;
let highestPrice = 0;
let expensiveProduct = "";

let numberOfProducts = Number(prompt("Enter Number of Products"));

document.write("<h2>Customer Name : " + customerName + "</h2>");
document.write("<h3>Products</h3>");

for(let i = 0; i < numberOfProducts; i++)
{
    let productName = prompt("Enter Product Name");

    let quantity = Number(prompt("Enter Quantity"));

    let price = Number(prompt("Enter Price"));

    let bill = quantity * price;

    totalBill = totalBill + bill;

    if(price > highestPrice)
    {
        highestPrice = price;
        expensiveProduct = productName;
    }

    document.write(productName + " - Quantity : " + quantity + " - Price : " + price + " - Total : " + bill + "<br>");
}
let discount = 0;

if(totalBill >= 5000)
{
    discount = totalBill * 0.20;
}
else if(totalBill >= 3000)
{
    discount = totalBill * 0.10;
}
else if(totalBill >= 1000)
{
    discount = totalBill * 0.05;
}
else
{
    discount = 0;
}

let billAfterDiscount = totalBill - discount;
let gst = billAfterDiscount * 0.18;
let finalBill = billAfterDiscount + gst;

let payment = prompt("Enter Payment Method (Cash, UPI, Card)");

document.write("<br><br><b>Payment Details</b><br>");

switch(payment)
{
    case "Cash":
        document.write("Payment through Cash");
        break;

    case "UPI":
        document.write("Payment through UPI");
        break;

    case "Card":
        document.write("Payment through Card");
        break;

    default:
        document.write("Invalid Payment Method");
}

document.write("<br><br>Total Bill : " + totalBill);
document.write("<br>Discount : " + discount);
document.write("<br>GST (18%) : " + gst);
document.write("<br>Final Bill : " + finalBill);

document.write("<br><br>Most Expensive Product : " + expensiveProduct);
document.write("<br>Highest Price : " + highestPrice);