import Image from "next/image";
import news from "../../../assets/news/news5.jpg";
import "./news.css";
import Container from "@/components/ui/HomePage/Container/Container";
const News = () => {
  return (
    <>
      <div className="serviceDetailsWrap aboutWraps">
        <div className="aboutContent">
          <h1>What we are capable to usually discovered.</h1>
        </div>
      </div>
      <Container>
        <div className="grid grid-cols-12">
          <div className="col-span-4"></div>
          <div className="col-span-8">
            <div className="newsDetailsRightSideWrap">
              <Image src={news} alt="news" />
              <div>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum The man, who is in a stable
                  condition in hospital, has “potentially life-changing
                  injuries” after the overnight attack in Garvagh, County Lono
                  donderry. He was shot in the arms and legs.”What sort of men
                  would think it is accepttable to sub ject a young girl to this
                  level of brutality and violence?
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default News;
