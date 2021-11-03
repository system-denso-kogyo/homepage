import React from "react";

export interface CompanyMapProps {
    width: number,
    height: number
}

export const CompanyMap: React.FC<CompanyMapProps> = ({ width, height }) => (
    <>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1503.1641418757347!2d139.78683436170138!3d35.72275110995969!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188e8e1608f807%3A0x5919d6eb1edcf6d3!2z44CSMTEwLTAwMTIg5p2x5Lqs6YO95Y-w5p2x5Yy656uc5rOJ77yR5LiB55uu77yZ4oiS77yS!5e0!3m2!1sja!2sjp!4v1628699318989!5m2!1sja!2sjp"
            width={width}
            height={height}
            loading="lazy"
            css={{ border: "none" }}
        ></iframe>
    </>
);
