interface ICreditsProps {
  content: string;
}

function Credits({ content }: ICreditsProps) {
  return (
    <div className="border-t pt-10 border-gray-200 credits text-sm text-gray-500 mt-24 flex items-center justify-center">
      <span>{content}</span>
    </div>
  );
}

export default Credits;
