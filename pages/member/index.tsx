import OverviewContent from '../../component/organisms/OverviewContent';
import SideBar from '../../component/organisms/SideBar';

export default function Member() {
  return (
    <>
      <section className="overview overflow-auto">
        <SideBar />
        <OverviewContent />
      </section>
    </>
  );
}
