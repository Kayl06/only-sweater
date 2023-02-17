interface ICompanyDetailsProps {
  tel: string;
  email: string;
}

function CompanyDetails({ tel, email }: ICompanyDetailsProps) {
  return (
    <div className="company-details mt-20 lg:mt-32 text-sm flex flex-col items-center justify-center lg:items-start lg:justify-start">
      <div className="mb-8">
        <span className="mr-2">Tel:</span>
        <a href="tel:0312345679">{tel}</a>
      </div>
      <div>
        <span className="mr-2">Email:</span>
        <a href="mailto:onlysweater@jp.com">{email}</a>
      </div>
    </div>
  );
}

export default CompanyDetails;
