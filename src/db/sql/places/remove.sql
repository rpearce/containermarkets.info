------------------------------------------------------------
-- Deletes place records by slug
------------------------------------------------------------

DELETE FROM places WHERE slug = $1;
