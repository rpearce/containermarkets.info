------------------------------------------------------------
-- Updates place record
------------------------------------------------------------

UPDATE places
SET name = ${name},
    slug = ${slug},
    description = ${description},
    content = ${content},
    address = ${address},
    latitude = ${latitude},
    longitude = ${longitude}
WHERE slug = ${oldSlug}
RETURNING slug;
