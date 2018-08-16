// some funcs to easy deal with SessionStorage

export const checkUserSession = (key, value) => {
  const savings = JSON.parse(sessionStorage.getItem(key));

  if (!savings || !savings.user.id) return false;

  return savings.user.id === value;
};

export const setLocalData = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

export const getInitStateFromStorageByKey = key =>
  JSON.parse(sessionStorage.getItem(key));
