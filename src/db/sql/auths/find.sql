------------------------------------------------------------
-- Finds auth record by id
------------------------------------------------------------

SELECT admin_id
FROM auths
WHERE id = $1
ORDER BY created_at desc
LIMIT 1;
