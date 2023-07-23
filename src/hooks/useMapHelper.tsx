const useMapHelper = (obj: any) => {
  return Object.keys(obj).map((key) => ({
    title: key,
    detail: obj[key],
  }));
};

export default useMapHelper;
