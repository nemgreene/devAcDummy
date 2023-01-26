import {
  useSprings,
  useSpring,
  animated,
  useTransition,
} from "@react-spring/web";
import { useEffect, useState, useRef } from "react";
import { menuRailFinish, menuRailStart } from "../animLibrary";
import MenuRunner from "./MenuRunner";
import { labels, icons } from "./MenuLabels";

const MenuItem = ({ col, index, styles, changeActive }) => {
  const [active, cActive] = useState(false);
  const [railWidth, changeRailWidth] = useState(0);
  const ref = useRef();

  const [rail, railApi] = useSpring(() => ({
    ...menuRailStart,
  }));
  const [child, childApi] = useSpring(() => ({
    from: { opacity: 1 },
  }));
  useEffect(() => {
    let full = window.innerWidth > 576;
    let left = !full ? "-15vw" : col ? "-20vw" : "-50vw";
    childApi.start(() =>
      active ? { to: { opacity: 0 } } : { to: { opacity: 1 } }
    );
    railApi.start(() =>
      active
        ? {
            ...menuRailFinish(left),
            onRest: () => {
              changeRailWidth(ref.current?.getBoundingClientRect().width);
            },
          }
        : {
            ...menuRailStart,
            onRest: () => {
              changeRailWidth(0);
            },
          }
    );
  }, [active]);
  return (
    <animated.div
      className="menuRelative"
      onMouseEnter={() => {
        changeActive({ index, col });
        cActive(true);
      }}
      onMouseLeave={() => {
        changeActive(undefined);
        cActive(undefined);
      }}
      style={{ ...styles }}
    >
      <animated.div style={{ ...rail }} ref={ref} className="bannerRails">
        <MenuRunner speed="4.5" direction="left">
          <div className="bannerItem">{labels[index]}</div>
        </MenuRunner>
      </animated.div>
      <animated.div style={child} className="menuChild">
        {icons[index]}
        {labels[index]}
      </animated.div>
    </animated.div>
  );
};

export default MenuItem;
