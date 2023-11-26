import { Helmet } from "react-helmet";
const title = ["الدعوة الى االله"];
let i = 0;
function TitlePage() {
  return (
    <Helmet>
      <title>{title[i]}</title>
    </Helmet>
  );
}
export default TitlePage;
