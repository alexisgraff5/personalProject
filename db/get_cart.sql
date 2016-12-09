SELECT oi.orderid, oi.id as orderitemid, oi.productid, p.sku, p.name, p.price, p.color, p.size, p.view1 FROM orders o
JOIN orderitem oi
ON o.id = oi.orderid
JOIN product p
on p.id = oi.productid
WHERE o.userid = $1 AND checkout = false;
