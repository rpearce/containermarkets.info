------------------------------------------------------------
-- Creates places table
------------------------------------------------------------

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE places (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name varchar NOT NULL,
  slug varchar NOT NULL,
  description text NOT NULL,
  content text NOT NULL,
  address text,
  latitude varchar,
  longitude varchar,
  created_at timestamp NOT NULL DEFAULT (current_timestamp AT TIME ZONE 'utc'),
  updated_at timestamp NOT NULL DEFAULT (current_timestamp AT TIME ZONE 'utc')
);

CREATE UNIQUE INDEX places__unique_slug ON places (lower(slug));
