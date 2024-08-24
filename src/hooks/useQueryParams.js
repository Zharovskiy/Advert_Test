import { useSearchParams } from "react-router-dom";

const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getParam = (key) => {
    return searchParams.get(key);
  };

  const setParam = (key, value) => {
    if (value) {
      searchParams.set(key, value);
    } else {
      searchParams.delete(key);
    }
    setSearchParams(searchParams);
  };

  const removeParam = (key) => {
    searchParams.delete(key);
    setSearchParams(searchParams);
  };

  const getAllParams = () => {
    const params = {};
    for (let [key, value] of searchParams.entries()) {
      params[key] = value;
    }
    return params;
  };

  return { getParam, setParam, removeParam, getAllParams };
};

export default useQueryParams;
