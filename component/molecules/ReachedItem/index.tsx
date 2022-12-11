interface ReachedItemProps {
  title: string;
  subTitle: string;
}
export default function ReachedItem(props: Partial<ReachedItemProps>) {
  const { title, subTitle } = props;
  return (
    <div className="me-lg-35">
      <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">
        {title}
      </p>
      <p className="text-lg text-lg-start text-center color-palette-2 m-0">
        {subTitle}
      </p>
    </div>
  );
}
