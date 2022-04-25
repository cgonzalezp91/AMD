SELECT Brand,Name,Price, RANK() OVER(PARTITION BY Brand ORDER BY Price DESC) as [rank]
FROM product_price