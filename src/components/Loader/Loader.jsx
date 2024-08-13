import { Oval } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = ({ loading }) => {
  return (
    <Oval
      visible={loading}
      height="40"
      width="40"
      color="#e44848"
      secondaryColor=""
      ariaLabel="oval-loading"
      wrapperStyle={{}}
      wrapperClass={css.loader}
    />
  );
};

export default Loader;
