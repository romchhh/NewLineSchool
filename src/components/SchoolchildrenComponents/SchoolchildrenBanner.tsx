import "./css/SchoolchildrenBanner.css";
export default function SchoolchildrenBanner() {
  const links = [
    {
      text: "Англійська для дітей (1-4 класи)",
      href: "",
    },
    {
      text: "навчання для підлітків (5-9 класи)",
      href: "",
    },
    {
      text: "Англійська для підлітків (10-11 клас) Підготовка до НМТ",
      href: "",
    },
  ];
  return (
    <div className="schoolchildren-banner-container">
      <div className="schoolchildren-banner-content">
          <div className="schoolchildren-banner-content-text-header">
            англійська для школярів
          </div>
          <div className="schoolchildren-banner-content-text-links">
            {links.map((link, index) => {
              return (
                <div key={index} className="schoolchildren-banner-content-text-link">
                  {link.text}
                </div>
              );
            })}
          </div>
      </div>
      <div className="schoolchildren-banner-right">
        <div className="schoolchildren-banner-right-img">
          <img src="public/assets/images/forSchoolchildren.png" alt="" />
        </div>
        <div className="schoolchildren-banner-right-text">
        school  ·  exams  ·  speak club
        </div>
      </div>
    </div>
  );
}
