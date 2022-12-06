import React from 'react';
import cx from 'classnames';

interface ReachedItemProps {
  title: string;
  subTitle: string;
  active?: boolean;
}
export default function ReachedItem(props: Partial<ReachedItemProps>) {
  const { title, subTitle, active } = props;
  //   const LineH = cx({
  //     'reached horizontal-line ': true,
  //     active,
  //   });
  //   const LineV = cx({
  //     'reached vertical-line ': true,
  //     active,
  //   });
  return (
    <>
      {/* <div
        className={`${LineH} mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block`}
      />
      <div className={`${LineV} me-lg-35 ms-lg-35 d-lg-block d-none`} /> */}
      <div className="me-lg-35">
        <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">
          {title}
        </p>
        <p className="text-lg text-lg-start text-center color-palette-2 m-0">
          {subTitle}
        </p>
      </div>
    </>
  );
}
