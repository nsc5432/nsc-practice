import CacheProvider from "../../external/redux/CacheProvider";
import CacheSampleWrapper from "./CacheSampleWrapper";

const CacheSample = () => {
  return (
    <CacheProvider>
      <CacheSampleWrapper />
    </CacheProvider>
  );
};

export default CacheSample;
