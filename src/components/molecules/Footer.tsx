import styled from "styled-components";
/* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab); */

const Container1 = styled.div`
  margin: 0;
  width: 100%;
  background-color: #f6f3f2;
  padding: 30px 0 0;
`;

const Con1Inside = styled.div`
  width: calc(100% - 60px);
  max-width: 1120px;
  background-color: #fff;
  margin: 0 auto;
  border: 1px solid #e4dcd3;
  border-radius: 20px 20px 0 0;
`;

const Con1Head = styled.div`
  padding: 24px 50px 21px;
  color: #000;
  font-size: 16px;
`;

const Con1Content = styled.div`
  display: flex;
  margin: 5px 0 0;
  padding: 0 15px 30px;
`;

const Con1Div = styled.div`
  width: 33.3%;
  padding: 0 35px;
  color: #002c5f;
  color: #444;
  font-size: 14px;
  height: fit-content;
`;

const Con1DivHead = styled.div`
  color: #002c5f;
  font-size: 16px;
  margin: -5px 0;
`;

const Con1DivList = styled.ul`
  list-style: none;
  padding: 3px 0;
  margin: 0;
`;

const Con1DivLi = styled.li`
  width: 49%;
  padding: 0;
  display: inline-flex;
  padding: 16px 0 0;
  cursor: pointer;
`;

const Container2 = styled.div`
  margin: 0;
  width: 100%;
  height: fit-content;
  background-color: #1c1b1b;
  color: #999999;
  padding: 60px 0;
  font-size: 14px;
  letter-spacing: -0.5px;
  font-weight: 300;
`;

const Con2Inside1 = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  height: fit-content;
`;

const Con2Inside1Div1 = styled.div`
  padding-top: 7px;
`;

const Con2Inside1Div2 = styled.div`
  margin-left: 50px;
`;

const Con2Inside1Div3 = styled.div`
  float: right;
  width: 400px;
  height: 74px;
`;

const Con2Inside1Div3Icon = styled.div`
  width: 30px;
  height: 32px;
  margin-bottom: 10px;
`;

const Con2Inside1Div3Box = styled.button`
  height: 30px;
  width: 100%;
  padding: 0 13px;
  border: 1px solid #676767;
  text-align: left;
  color: #999;
  background-color: #1c1b1b;
  cursor: pointer;
`;

const Con2Inside2 = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100px;
  margin: 40px auto 30px;
  border-top: 1px solid #3b3b3b;
  padding-top: 42px;
`;

const Con2Inside1List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 70%;
`;

const Con2Inside1Li = styled.li`
  height: 15px;
  display: inline-flex;
  margin: 0 0 17px;
  border-right: 2px solid #3b3b3b;
  line-height: 100%;
  padding: 0 15px;
  cursor: pointer;
`;

const Copyright = styled.div`
  width: fit-content;
  height: fit-content;
  font-size: 12px;
  letter-spacing: 0.5px;
  padding: 0 15px;
  margin: -7px 0 5px;
`;

const Con2Inside2List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 1120px;
  display: flex;
`;

const Con2Inside2Li = styled.li`
  font-size: 12px;
  line-height: 160%;
  font-weight: 400;
  width: 19%;
  display: flex;
  margin-right: 15px;
  margin-bottom: 10px;
`;

const Con2Inside2Img = styled.div`
  vertical-align: top;
  margin: 0 5px 0 0;
  width: 40px;
`;

function Footer() {
  return (
    <>
      <Container1>
        <Con1Inside>
          <Con1Head>기업정보·IR정보·지속가능경영</Con1Head>
          <Con1Content>
            <Con1Div>
              <Con1DivHead>기업정보</Con1DivHead>
              <Con1DivList>
                <Con1DivLi>기업이념</Con1DivLi>
                <Con1DivLi>연혁</Con1DivLi>
                <Con1DivLi>주요관계사</Con1DivLi>
                <Con1DivLi>CI</Con1DivLi>
                <Con1DivLi>수상내역</Con1DivLi>
              </Con1DivList>
            </Con1Div>
            <Con1Div
              style={{
                borderLeft: "1px solid #e5e5e5",
                borderRight: "1px solid #e5e5e5",
              }}
            >
              <Con1DivHead>IR 정보</Con1DivHead>
              <Con1DivList>
                <Con1DivLi>경영정보</Con1DivLi>
                <Con1DivLi>재무정보</Con1DivLi>
                <Con1DivLi>판매실적</Con1DivLi>
                <Con1DivLi>공시/공고</Con1DivLi>
                <Con1DivLi>주식정보</Con1DivLi>
                <Con1DivLi>IR현황</Con1DivLi>
                <Con1DivLi>
                  배당조회
                  <span
                    className="material-symbols-outlined"
                    style={{
                      margin: "0 0 0 3px",
                      padding: "4px 0 0",
                      fontSize: "16px",
                    }}
                  >
                    open_in_new
                  </span>
                </Con1DivLi>
              </Con1DivList>
            </Con1Div>
            <Con1Div>
              <Con1DivHead>지속가능 경영</Con1DivHead>
              <Con1DivList>
                <Con1DivLi>지속가능 경영</Con1DivLi>
                <Con1DivLi>CSV 소개</Con1DivLi>
                <Con1DivLi>스토리</Con1DivLi>
                <Con1DivLi>지속가능성보고서</Con1DivLi>
                <Con1DivLi>사회공헌백서</Con1DivLi>
              </Con1DivList>
            </Con1Div>
          </Con1Content>
        </Con1Inside>
      </Container1>
      <Container2>
        <Con2Inside1>
          <Con2Inside1Div1>
            <img
              src="https://www.hyundai.com/static/images/logo_footer.png"
              alt=""
            ></img>
          </Con2Inside1Div1>
          <Con2Inside1Div2>
            <Con2Inside1List>
              <Con2Inside1Li>모바일 App</Con2Inside1Li>
              <Con2Inside1Li>저작권안내</Con2Inside1Li>
              <Con2Inside1Li style={{ color: "#fff" }}>
                개인정보 처리방침
              </Con2Inside1Li>
              <Con2Inside1Li>이용약관</Con2Inside1Li>
              <Con2Inside1Li style={{ border: "none" }}>
                프라이버시 센터
              </Con2Inside1Li>
              <Con2Inside1Li>윤리경영 사이버 감사실</Con2Inside1Li>
              <Con2Inside1Li>영상정보처리기기 운영관리방침</Con2Inside1Li>
              <Con2Inside1Li style={{ border: "none" }}>사이트맵</Con2Inside1Li>
              <Con2Inside1Li
                style={{
                  marginRight: "20px",
                  fontWeight: "500",
                  border: "none",
                  cursor: "auto",
                }}
              >
                고객센터 : 080-600-6000
              </Con2Inside1Li>
            </Con2Inside1List>
            <Copyright>
              COPYRIGHT ⓒ HYUNDAI MOTOR COMPANY. ALL RIGHTS RESERVED.
            </Copyright>
          </Con2Inside1Div2>
          <Con2Inside1Div3>
            <Con2Inside1Div3Icon>
              {/* <FontAwesomeIcon icon={["fab", "facebook"]} />
              <FontAwesomeIcon icon={["fab", "youtube"]} />
              <FontAwesomeIcon icon={["fab", "facebook"]} /> */}
            </Con2Inside1Div3Icon>
            <Con2Inside1Div3Box>
              Family Sites{" "}
              {/* <FontAwesomeIcon
                icon={faSortDown}
                style={{
                  marginLeft: "160px",
                  paddingBottom: "2px",
                  fontSize: "11px",
                }}
              /> */}
            </Con2Inside1Div3Box>
          </Con2Inside1Div3>
        </Con2Inside1>
        <Con2Inside2>
          <Con2Inside2List>
            <Con2Inside2Li>
              <Con2Inside2Img>
                <img
                  src="https://www.hyundai.com/content/dam/hyundai/kr/ko/images/common/footer-mark-wa.png"
                  alt=""
                ></img>
              </Con2Inside2Img>
              웹 접근성 품질인증
            </Con2Inside2Li>
            <Con2Inside2Li>
              <Con2Inside2Img>
                <img
                  src="https://www.hyundai.com/content/dam/hyundai/kr/ko/images/common/footer-mark01.png"
                  alt=""
                ></img>
              </Con2Inside2Img>
              우수디자인 지식경제부선정
            </Con2Inside2Li>
            <Con2Inside2Li>
              <Con2Inside2Img>
                <img
                  src="https://www.hyundai.com/content/dam/hyundai/kr/ko/images/common/footer-mark03.png"
                  alt=""
                ></img>
              </Con2Inside2Img>
              가족친화 우수기관
            </Con2Inside2Li>
            <Con2Inside2Li>
              <Con2Inside2Img>
                <img
                  src="https://www.hyundai.com/content/dam/hyundai/kr/ko/images/common/footer-mark04.png"
                  alt=""
                ></img>
              </Con2Inside2Img>
              2022년 한국서비스품질지수 (KS-SQI) 자동차 A/S 부문 8년 연속 1위
            </Con2Inside2Li>
            <Con2Inside2Li>
              <Con2Inside2Img>
                <img
                  src="https://www.hyundai.com/content/dam/hyundai/kr/ko/images/common/img_mark_ksqei.png"
                  alt=""
                ></img>
              </Con2Inside2Img>
              2022년 한국품질만족지수 (KS-QEI) 조사 12개 부문 1위
            </Con2Inside2Li>
          </Con2Inside2List>
          <Con2Inside2List>
            <Con2Inside2Li>
              <Con2Inside2Img>
                <img
                  src="https://www.hyundai.com/content/dam/hyundai/kr/ko/images/common/footer-mark06.png"
                  alt=""
                ></img>
              </Con2Inside2Img>
              2022년 국가고객만족도 (NCSI) 자동차기업 최초 조사대상 전부문 9년
              연속 1위 수상 (준중형, 중형, 준대형, 대형, RV)
            </Con2Inside2Li>
            <Con2Inside2Li>
              <Con2Inside2Img>
                <img
                  src="https://www.hyundai.com/content/dam/hyundai/kr/ko/images/common/footer-mark07.png"
                  alt=""
                ></img>
              </Con2Inside2Img>
              KMAC 선정
              <br />
              2022년 한국산업의 고객만족도
              <br />
              일반승용차 부문 29년 연속
              <br />
              RV승용차 부문 19년 연속 1위
            </Con2Inside2Li>
          </Con2Inside2List>
        </Con2Inside2>
      </Container2>
    </>
  );
}

export default Footer;
