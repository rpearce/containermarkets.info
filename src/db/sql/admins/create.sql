------------------------------------------------------------
-- Creates admins table
------------------------------------------------------------

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS citext;

CREATE TABLE admins (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  email citext NOT NULL,
  created_at timestamp NOT NULL DEFAULT (current_timestamp AT TIME ZONE 'utc'),
  updated_at timestamp NOT NULL DEFAULT (current_timestamp AT TIME ZONE 'utc')
);

CREATE UNIQUE INDEX admins__unique_email ON admins (email);
