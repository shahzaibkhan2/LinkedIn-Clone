import { postDataAssets } from "@/data/homeData";
import { IPostData } from "@/interfaces/IHomeContext";
import { TChildren, TMainContext } from "@/types/TPost";
import { createContext, useEffect, useState } from "react";

export const HomeContext = createContext<TMainContext | null>(null);

// Types/Interfaces for children prop

const HomeContextProvider = ({ children }: TChildren) => {
  // <------------------------------ States ---------------------------------->

  const [postData, setPostData] = useState<IPostData[]>(postDataAssets);
  const [stickyNav, setStickyNav] = useState("");
  const [underline, setUnderline] = useState("home");
  const [chatUnderline, setChatUnderline] = useState("focused");
  const [miniChat, setMiniChat] = useState(true);

  // <------------------------- Rendering Section (useEffects etc) ------------------>

  useEffect(() => {
    const handleNavScroll = () => {
      window.scrollY > 20 ? setStickyNav("fixed") : setStickyNav("");
    };

    window.addEventListener("scroll", handleNavScroll);

    return () => {
      window.removeEventListener("scroll", handleNavScroll);
    };
  }, []);

  // <------------------------- Context Values ------------------------------->

  const contextValues = {
    postData,
    setPostData,
    stickyNav,
    setStickyNav,
    underline,
    setUnderline,
    chatUnderline,
    setChatUnderline,
    miniChat,
    setMiniChat,
  };

  return (
    <HomeContext.Provider value={contextValues}>
      {children}
    </HomeContext.Provider>
  );
};

export default HomeContextProvider;
