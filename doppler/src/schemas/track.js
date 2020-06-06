import { schema } from 'normalizr';


export const tracks = new schema.Entity(
  'tracks',
);
export const tracks = new schema.Array(tracks);
