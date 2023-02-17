import Info from "../components/info/Info";
import ViewMore from "../components/ViewMore";

function InfoPage() {
  const items = [
    { title: "2022ウィンターコレクション発表のお知らせ", date: "2022/01/01" },
    { title: "2022ウィンターコレクション発表のお知らせ", date: "2022/01/01" },
    { title: "2022ウィンターコレクション発表のお知らせ", date: "2022/01/01" },
  ];

  return (
    <div className="mt-32 mx-8 lg:mx-auto">
      <h1 className="text-3xl text-start mb-16 text-gray-900">Info</h1>
      <Info items={items} />
      <ViewMore className="flex justify-center" />
    </div>
  );
}

export default InfoPage;
