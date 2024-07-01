import * as React from "react";

import { IconSvgProps } from "@/types";

export const Logo: React.FC<IconSvgProps> = ({
  size = 36,
  height,
  ...props
}) => (
  <svg
    height={size || height}
    viewBox="0 -960 960 960"
    width={size || height}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M240-160q-66 0-113-47T80-320v-320q0-66 47-113t113-47h480q66 0 113 47t47 113v320q0 66-47 113t-113 47H240Zm0-480h480q22 0 42 5t38 16v-21q0-33-23.5-56.5T720-720H240q-33 0-56.5 23.5T160-640v21q18-11 38-16t42-5Zm-74 130 445 108q9 2 18 0t17-8l139-116q-11-15-28-24.5t-37-9.5H240q-26 0-45.5 13.5T166-510Z"
      fill="currentColor"
    />
  </svg>
);

export const SettingsIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 -960 960 960"
      width={size || height}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm112-260q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const CreateIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 -960 960 960"
      width={size || height}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M160-480h640v-160H160v160ZM760-80v-120H640v-80h120v-120h80v120h120v80H840v120h-80Zm-600-80q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v240H760q-83 0-141.5 58.5T560-280v120H160Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const ResizeIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      fill="#e8eaed"
      height={size || height}
      viewBox="0 -960 960 960"
      width={size || height}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M218-218q-17-17-17-42t17-42l440-440q17-18 42-17.5t42 17.5q17 17 17.5 42T742-658L302-218q-17 17-42 17.5T218-218Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const MoonFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

export const SunFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);

export const HeartFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);

export const SearchIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const EditIcon: React.FC<IconSvgProps> = (props) => {
  const { size = 24, height = 40 } = props;

  return (
    <svg
      fill="currentColor"
      height={size || height}
      viewBox="0 -960 960 960"
      width={size || height}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M120-120v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm584-528 56-56-56-56-56 56 56 56Z" />
    </svg>
  );
};

export const SaveIcon: React.FC<IconSvgProps> = (props) => {
  const { size = 24, height } = props;

  return (
    <svg
      fill="currentColor"
      height={size || height}
      viewBox="0 -960 960 960"
      width={size || height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160ZM480-240q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-560h360v-160H240v160Z" />
    </svg>
  );
};

export const GridIcon: React.FC<IconSvgProps> = (props) => {
  const { size = 24, height } = props;

  return (
    <svg
      fill="currentColor"
      height={size || height}
      viewBox="0 -960 960 960"
      width={size || height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h240v720H200Zm320 0v-360h320v280q0 33-23.5 56.5T760-120H520Zm0-440v-280h240q33 0 56.5 23.5T840-760v200H520Z" />
    </svg>
  );
};

export const CardIcon: React.FC<IconSvgProps> = (props) => {
  const { size = 24, height } = props;

  return (
    <svg
      fill="currentColor"
      height={size || height}
      viewBox="0 -960 960 960"
      width={size || height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-320h640v-160H160v160Z" />
    </svg>
  );
};

export const CameraSearchIcon: React.FC<IconSvgProps> = (props) => {
  const { size = 24, height } = props;

  return (
    <svg
      fill="currentColor"
      height={size || height}
      viewBox="0 -960 960 960"
      width={size || height}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M450-420q38 0 64-26t26-64q0-38-26-64t-64-26q-38 0-64 26t-26 64q0 38 26 64t64 26Zm193 160L538-365q-20 13-42.5 19t-45.5 6q-71 0-120.5-49.5T280-510q0-71 49.5-120.5T450-680q71 0 120.5 49.5T620-510q0 23-6.5 45.5T594-422l106 106-57 56ZM200-120q-33 0-56.5-23.5T120-200v-160h80v160h160v80H200Zm400 0v-80h160v-160h80v160q0 33-23.5 56.5T760-120H600ZM120-600v-160q0-33 23.5-56.5T200-840h160v80H200v160h-80Zm640 0v-160H600v-80h160q33 0 56.5 23.5T840-760v160h-80Z" />
    </svg>
  );
};

export const BackIcon: React.FC<IconSvgProps> = (props) => {
  const { size = 24, height } = props;

  return (
    <svg
      fill="currentColor"
      height={size || height}
      viewBox="0 -960 960 960"
      width={size || height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
    </svg>
  );
};

export const CameraIcon: React.FC<IconSvgProps> = (props) => {
  const { size = 24, height } = props;

  return (
    <svg
      fill="currentColor"
      height={size || height}
      viewBox="0 -960 960 960"
      width={size || height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M480-260q75 0 127.5-52.5T660-440q0-75-52.5-127.5T480-620q-75 0-127.5 52.5T300-440q0 75 52.5 127.5T480-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM160-120q-33 0-56.5-23.5T80-200v-480q0-33 23.5-56.5T160-760h126l74-80h240l74 80h126q33 0 56.5 23.5T880-680v480q0 33-23.5 56.5T800-120H160Z" />
    </svg>
  );
};
export const CardOff: React.FC<IconSvgProps> = (props) => {
  const { size = 24, height } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={size || height} viewBox="0 -960 960 960" width={size || height} fill="currentColor">
      <path
        d="M871-203 594-480h206v-160H434L274-800h526q33 0 56.5 23.5T880-720v480q0 10-2 19.5t-7 17.5ZM160-480h206L206-640h-46v160ZM818-28 686-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800l80 80H126L26-820l57-57L875-85l-57 57Z" />
    </svg>
  );
};
