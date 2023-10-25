export const timeStyles = /* css */ `
.time {
  position: relative;
  background-color: var(--yellow);
  overflow: hidden;
  z-index: 0;
  // font-family: e1234;
  font-weight: bolder;
  font-size: 14px;
}
.simple-bar--widgets-background-color-as-foreground .time {
  color: var(--yellow);
  background-color: transparent;
  border: 2px solid rgba(218, 170, 94, .20);
}
.time__filler {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scaleX(0);
  /* background-color: rgba(0, 0, 0, 0.15); */
  background-color: rgba(0, 0, 0, 0.35);
  transform-origin: left;
  pointer-events: none;
  touch-action: none;
  z-index: -1;
}
.simple-bar--widgets-background-color-as-foreground .time__filler {
  background-color: rgba(218, 170, 94, .20);
}
`;
