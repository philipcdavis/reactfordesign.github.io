import React from 'react';

const IconMap = {
  "add": Add,
  "remove": Remove,
  "check": Check,
  "pin": Pin
}

const Icon = function(props) {
  let { name, fill = "", size = 16, className, ...rest } = props;
  const Component = IconMap[name] ? IconMap[name] : null;

  return (
    <svg
      width={size}
      height={size}
      className={className}
      {...rest}
      viewBox="0 0 16 16"
    >
      <Component fill={fill} />
    </svg>
  );
}

function Add(props) {
  return (
    <path fill={props.fill} d="M9,7 L14,7 L14,9 L9,9 L9,14 L7,14 L7,9 L2,9 L2,7 L7,7 L7,2 L9,2 L9,7 Z"></path>
  )
}

function Remove(props) {
  return (
    <polygon fill={props.fill} points="9.41421356 8 12.9497475 11.5355339 11.5355339 12.9497475 8 9.41421356 4.46446609 12.9497475 3.05025253 11.5355339 6.58578644 8 3.05025253 4.46446609 4.46446609 3.05025253 8 6.58578644 11.5355339 3.05025253 12.9497475 4.46446609"></polygon>
  )
}

function Check(props) {
  return (
    <path fill={props.fill} d="M5.97093463,12.5775363 L5.9669082,12.5815628 L1.72426751,8.33892209 L3.13848108,6.92470853 L6.28886679,10.0750942 L13.363961,3 L14.7781746,4.41421356 L6.29289322,12.8994949 L5.97093463,12.5775363 Z"></path>
  )
}

function Pin(props) {
  return (
    <path fill={props.fill} d="M7.5,13 C5.16666667,9.66480193 4,7.1439686 4,5.4375 C4,2.8777971 5.56700338,2 7.5,2 C9.43299662,2 11,3.0601875 11,5.4375 C11,7.022375 9.83333333,9.54320833 7.5,13 Z M7.5,7 C8.32842712,7 9,6.32842712 9,5.5 C9,4.67157288 8.32842712,4 7.5,4 C6.67157288,4 6,4.67157288 6,5.5 C6,6.32842712 6.67157288,7 7.5,7 Z"></path>
  )
}

export default Icon;
