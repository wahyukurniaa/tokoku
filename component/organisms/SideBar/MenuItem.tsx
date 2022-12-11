import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
interface MenuItemProps {
  title: string;
  active?: boolean;
  icon:
    | 'ic-menu-card'
    | 'ic-menu-logout'
    | 'ic-menu-messages'
    | 'ic-menu-overview'
    | 'ic-menu-rewards'
    | 'ic-menu-settings'
    | 'ic-menu-transaction';
}
export default function MenuItem(props: Partial<MenuItemProps>) {
  const { title, icon, active } = props;
  const classItem = cx({
    activeIcon: true,
    item: true,
    'mb-30': true,
    active,
  });
  return (
    <div className={classItem}>
      <div className="me-3">
        <Image
          src={`/icon/${icon}.svg`}
          alt="overview"
          height={25}
          width={25}
        />
      </div>
      <p className="item-title m-0">
        <Link href="" className="text-lg text-decoration-none">
          {title}
        </Link>
      </p>
    </div>
  );
}
