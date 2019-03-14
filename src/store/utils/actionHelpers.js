const namespace = 'dev-test';
export const createPrefix = prefix => name => `${namespace}/${prefix}/${name}`;
export const createAction = type => payload => ({ type, payload });
