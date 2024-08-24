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

  const setAllParams = (values) => {
    let shouldUpdate = false;

    Object.keys(values).forEach((key) => {
      const value = values[key];
      if (value || value === "") {
        if (searchParams.get(key) !== value) {
          searchParams.set(key, value);
          shouldUpdate = true;
        }
      } else if (searchParams.has(key)) {
        searchParams.delete(key);
        shouldUpdate = true;
      }
    });

    if (shouldUpdate) {
      setSearchParams(searchParams);
    }
  };

  return { getParam, setParam, removeParam, getAllParams, setAllParams };
};

export default useQueryParams;
