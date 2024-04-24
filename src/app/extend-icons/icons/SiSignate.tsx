import BaseIcon from "../BaseIcon";

export const SiSignate = ({ color = "currentColor", size = 24, ...others }: IconProps) => {
    return (
        <BaseIcon
            iconTitle="Signate"
            viewBox="0 0 60 52"
            iconPath="M23.14,35.32c.16-.36.32-.74.47-1.13,2.58-6.69,3.95-17,4.5-34.19L0,48.69Z M43,23.86,29.24,0c-.56,17.13-1.93,27.57-4.51,34.39Z M22.26,37.13,3.12,48.19A36.28,36.28,0,0,0,12.74,46,18.2,18.2,0,0,0,22.26,37.13Z M43.56,24.83,24,36.12C21,42.75,16.51,45.7,13.15,47A37.45,37.45,0,0,1,3,49.34l-1.79.2-.51.06-.11.06H57.9Z"
            hex={color}
            size={size}
            {...others}
        />
    );
};
