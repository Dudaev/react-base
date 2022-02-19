import { useEffect, useRef } from "react";

export const useObserver = (lastElement, canLoad, isPostsLoading, cb) => {
  const observer = useRef();
  useEffect(() => {
    if (isPostsLoading) return;
    if (observer.current) observer.current.disconnect();

    var callback = function (entries, observer) {
      if (entries[0].isIntersecting && canLoad) {
        cb();
      }
    };

    observer.current = new IntersectionObserver(callback);
    observer.current.observe(lastElement.current);
  }, [isPostsLoading]);
};
