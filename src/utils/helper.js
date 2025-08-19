// Ensures that he fileds are required when we are in create mode
export const requiredIfCreate = (mode, message) =>
  mode === "create" ? message : false;

export const valIfCreate = (mode, value, message) =>
  mode === "create" ? { value, message } : undefined;
