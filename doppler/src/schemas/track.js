import { schema } from 'normalizr';


export const track = new schema.Entity(
  'tracks',
);
export const tracks = new schema.Array(track);
