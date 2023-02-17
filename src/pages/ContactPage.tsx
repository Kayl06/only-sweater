import Button from "../components/Button";

function ContactPage() {
  return (
    <div className="mt-28 md:mx-[100px] mx-[50px]">
      <h1 className="text-3xl text-center mb-10 text-gray-900">Contact</h1>

      <form>
        <div className="grid grid-cols-2 gap-6">
          <div className="mb-8">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              姓
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="例）太郎"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:gray-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              姓
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="例）太郎"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:gray-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="grid grid-rows-1">
          <div className="mb-8">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              メールアドレス
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="例）yamada@email.com"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:gray-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-8">
            <label htmlFor="message" className="お問合せ内容">
              お問合せ内容
            </label>
            <textarea
              id="message"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded"
              placeholder=""
              rows={10}
            ></textarea>
          </div>
        </div>
        <div className="flex justify-center">
          <Button className="bg-orange-400 rounded text-white w-[150px] p-3">
            送信する
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ContactPage;
