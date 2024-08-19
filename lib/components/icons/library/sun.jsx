import Icon from "../icon.jsx";
import * as Utils from "../../../utils";

export default function Sun(props) {
  return (
    <Icon {...props} className={Utils.classNames(props.className, "sun-icon")}>
      <g>
        <path d="M13.01 1.26c.03-.62-.2-1.06-.8-1.26h-.4c-.5.18-.8.5-.8 1.04v1.93c0 .18.05.35.12.5a.97.97 0 0 0 1.07.5.94.94 0 0 0 .79-.87l.01-.88.01-.96ZM1.27 11c-.63-.03-1.07.2-1.27.8v.4c.17.48.48.8 1.02.8h.29L3 12.99c.2-.01.4-.08.57-.18.36-.21.5-.66.39-1.08a.96.96 0 0 0-.89-.72H1.27ZM4.48 3.27l-.22-.1-.04.06c-.4 0-.75.22-.9.6-.17.38-.13.76.17 1.06.47.49.96.98 1.45 1.45a.98.98 0 0 0 1.09.22 1 1 0 0 0 .32-1.63c-.46-.47-.93-.96-1.43-1.4-.12-.12-.29-.19-.44-.26ZM4.36 20.78c-.53-.02-.85-.2-1.02-.56-.19-.38-.17-.76.1-1.06.52-.54 1.04-1.06 1.6-1.56.36-.36.96-.3 1.32.08.34.35.4.93.05 1.3-.5.54-1.03 1.07-1.57 1.57-.11.09-.24.15-.38.19l-.1.04ZM20.68 3.8c-.18-.38-.49-.55-1.02-.58l-.12.05c-.11.04-.29.11-.39.21-.53.48-1.04 1-1.53 1.52a.97.97 0 0 0 .05 1.34c.36.37.95.42 1.33.06.54-.5 1.05-1.02 1.55-1.55.29-.3.3-.67.13-1.05ZM20.8 19.67c-.03.53-.22.84-.6 1.02v-.01c-.36.17-.73.15-1.03-.12a38.4 38.4 0 0 1-1.57-1.58c-.33-.37-.28-.97.07-1.32.36-.36.95-.4 1.32-.06.54.5 1.06 1.02 1.56 1.56.1.12.17.26.2.4l.05.11ZM13 22.97v-1.93c-.02-.61-.45-1.05-1-1.04-.56.01-.98.44-.99 1.04v1.93c.01.6.43 1.03.98 1.03.57.01.99-.43 1.01-1.03ZM22.98 13H21.05c-.61-.01-1.04-.43-1.04-1 0-.55.43-.97 1.02-.98h1.94c.61 0 1.04.43 1.03 1 0 .56-.42.97-1.02.99Z" />
      </g>
      <path d="M11.87 8.01c2.15 0 3.93 1.8 3.93 3.99 0 2.19-1.78 4-3.93 3.98a3.97 3.97 0 0 1-3.92-4 3.97 3.97 0 0 1 3.92-3.97Zm-5.87 4a5.93 5.93 0 0 0 5.89 5.96A5.93 5.93 0 0 0 17.76 12c0-3.3-2.63-5.96-5.88-5.97-3.25 0-5.9 2.7-5.88 6v-.02Z" />
    </Icon>
  );
}
