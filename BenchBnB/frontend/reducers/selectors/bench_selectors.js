export const benchArray = ({ benches }) => (
  Object.keys(benches).map(key => benches[key])
);
