export const extractData = (rawData) => {
  const data =
    rawData?.status === "success" || rawData?.status === 200
      ? rawData?.data?.data?.data
      : [];

  return data;
};
