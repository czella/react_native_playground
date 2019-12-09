export const setPosition = (position) => ({
  type: "SET_POSITION",
  position
});
export const setError = (error) => ({
  type: "SET_ERROR",
  error
});
export const setProgress = progress => ({
  type: "SET_PROGRESS",
  progress
});
export const setBigProgress = bigProgress => ({
  type: "SET_BIG_PROGRESS",
  bigProgress
});
