CREATE TABLE Feedback (
  feedback_id INT,
  user_id INT,
  event_id INT,
  rating INT,
  comments TEXT,
  feedback_date DATE
);

INSERT INTO Feedback (feedback_id, user_id, event_id, rating, comments, feedback_date) VALUES
(1, 3, 2, 4, 'Great insights!', '2025-05-16'),
(2, 4, 2, 5, 'Very informative.', '2025-05-16'),
(3, 2, 1, 3, 'Could be better.', '2025-06-11');
