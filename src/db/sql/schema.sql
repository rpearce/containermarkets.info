DROP SCHEMA public CASCADE;
CREATE SCHEMA public;

------------------------------------------------------------
------------------------------------------------------------

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE places (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name varchar NOT NULL,
  slug varchar,
  image text,
  created_at timestamp NOT NULL DEFAULT (current_timestamp AT TIME ZONE 'utc'),
  updated_at timestamp NOT NULL DEFAULT (current_timestamp AT TIME ZONE 'utc')
);

CREATE INDEX places__name ON places (name);
CREATE UNIQUE INDEX places__unique_slug ON places (lower(slug));

------------------------------------------------------------
------------------------------------------------------------
