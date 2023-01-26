import React, { useState, useEffect } from "react";
import { useSprings, useSpring, animated } from "@react-spring/web";
import useMeasure from "react-use-measure";
import MenuItem from "./MenuItem";
import { menuItemDropStart, menuItemDropEnd } from "../animLibrary";
import { labels, icons } from "./MenuLabels";
function Menu() {
  const [active, changeActive] = useState();
  const [expanded, changeExpanded] = useState(false);

  const slice = Math.ceil(labels.length / 2);

  const [items, itemsApi] = useSprings(labels.length, () => ({
    ...menuItemDropStart,
  }));

  const trans = (x, y) =>
    `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

  const [mouse, mouseApi] = useSpring(() => ({ xy: [0, 0] }));
  const [ref, { left, top }] = useMeasure();
  const handleMouseMove = (e) => {
    mouseApi.start({ xy: [e.clientX - left, e.clientY - top] });
  };

  const down = [
    [5, 6, 7, 8],
    [6, 7, 8],
    [7, 8],
    [8],
    [1, 2, 3, 4],
    [2, 3, 4],
    [3, 4],
    [4],
  ];
  useEffect(() => {
    itemsApi.start((i) => {
      if (
        active &&
        window.innerWidth > 576 &&
        down[active.index]?.includes(i + 1)
      ) {
        return {
          to: {
            ...menuItemDropEnd,
          },
        };
      } else {
        return {
          to: {
            ...menuItemDropStart,
          },
        };
      }
    });
  }, [active]);

  return (
    <div
      className="menuContainer"
      style={{ width: "100vw", height: "100vh" }}
      onMouseMove={handleMouseMove}
    >
      <animated.div
        className="menuCursor"
        style={{ transform: mouse.xy.to(trans) }}
      >
        <svg height="100" width="100">
          <circle cx="50" cy="50" r="40" fill="#fcb237" />
        </svg>
      </animated.div>
      <animated.div className="menuRowContainer row">
        <div className="col-12 col-sm-1"></div>
        <div
          className="col-12 col-sm-5 row menuContentCol"
          onMouseLeave={() => changeActive(undefined)}
        >
          {items.slice(0, slice).map((styles, index) => {
            return (
              <MenuItem
                className="menuLi"
                col={true}
                index={index}
                key={index}
                styles={styles}
                changeActive={changeActive}
              />
            );
          })}
        </div>
        <div
          className="col-12 col-sm-5 row menuContentCol"
          // onMouseLeave={() => changeActive(undefined)}
        >
          {items.slice(slice).map((styles, index) => {
            return (
              <MenuItem
                className="menuLi"
                col={false}
                index={index + slice}
                key={index}
                styles={styles}
                changeActive={changeActive}
                labels={labels}
              />
            );
          })}
        </div>
        <div className="col-12 col-sm-1"></div>
      </animated.div>
    </div>
  );
}
export default Menu;
