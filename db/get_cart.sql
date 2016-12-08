SELECT * FROM orders o
JOIN orderitem oi
ON o.id = oi.orderid
JOIN product p
on p.id = oi.productid
WHERE o.userid = $1 AND checkout = false;
