SELECT DATE_FORMAT(registration_date, '%Y-%m') AS month, COUNT(*) AS registration_count
FROM Registrations
WHERE registration_date >= CURRENT_DATE - INTERVAL 12 MONTH
GROUP BY month
ORDER BY month;
