SELECT Brand,Name,Price, RANK() OVER(PARTITION BY Brand ORDER BY Price DESC) as [rank]
FROM product_price
GROUP BY Brand,Price,Name
ORDER BY sum(Price) Desc
LIMIT 2,2