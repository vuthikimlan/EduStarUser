import BannerAptisB1 from "@/component/banner/BannerAptisB1";
import Image from "next/image";
import Detail2 from "@/component/studyDetail/detail2";
import RegisterCourseVstep from "@/component/form/RegisterCourseVstep";
import Route from "@/component/route/route";
import AnotherCoures from "@/component/course/AnotherCoures";
import FormRegister from "@/component/form/FormRegister";
import DownloadDocument from "@/component/modal/downloadDocument";
import { getServiceById } from "@/api/apiService";

async function PageAptisB1(props) {
  const res2 = await getServiceById(16);
  let service = [];
  if (res2) {
    service = res2?.data;
  }
  // console.log("object service", service);
  return (
    <section>
      <BannerAptisB1 />
      <div style={{ margin: "0 auto", maxWidth: "1440px" }}>
        <div className="mx-[10%] my-[5%]">
          <div dangerouslySetInnerHTML={{ __html: service?.content }}></div>
        </div>

        <DownloadDocument />
        <RegisterCourseVstep />
        <div className="mx-[10%]">
          <h2 className="title">Lộ trình học và thi</h2>
          <Route />
          <>
            <h2 className="title"> Các chương trình học khác</h2>
            <AnotherCoures />
          </>
          <>
            <h2 className="title">Đăng ký nhận tư vấn</h2>
            <FormRegister />
          </>
        </div>
      </div>
    </section>
  );
}

export default PageAptisB1;
