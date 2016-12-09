UPDATE orders
SET checkout = true
WHERE id = $1;
