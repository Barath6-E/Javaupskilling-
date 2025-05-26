SELECT registration_date, COUNT(*) AS user_count
FROM Users
WHERE registration_date >= CURRENT_DATE - INTERVAL 7 DAY
GROUP BY registration_date;
