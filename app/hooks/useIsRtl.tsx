import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useIsRtl = () => {

  const { locale } = useRouter()
  const [isRtl, setIsRtl] = useState<boolean>(false);
  useEffect(() => {
    setIsRtl(locale === 'fa');
  }, [locale])
  
  return isRtl;
};