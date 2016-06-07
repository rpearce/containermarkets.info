------------------------------------------------------------
-- Creates auths table
------------------------------------------------------------

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE auths (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  admin_id uuid NOT NULL REFERENCES admins,
  created_at timestamp NOT NULL DEFAULT (current_timestamp AT TIME ZONE 'utc'),
  updated_at timestamp NOT NULL DEFAULT (current_timestamp AT TIME ZONE 'utc')
);

CREATE INDEX auths__unique_user_id ON auths (admin_id);
