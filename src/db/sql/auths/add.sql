------------------------------------------------------------
-- Inserts new auth record
------------------------------------------------------------

INSERT INTO auths (admin_id) VALUES ($1) RETURNING id;
