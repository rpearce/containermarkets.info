------------------------------------------------------------
-- Inserts new place record
------------------------------------------------------------

INSERT INTO places (
  name,
  slug,
  description,
  content,
  address,
  latitude,
  longitude
)
VALUES(
  ${name},
  ${slug},
  ${description},
  ${content},
  ${address},
  ${latitude},
  ${longitude}
)
RETURNING slug;
