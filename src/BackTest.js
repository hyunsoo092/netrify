import React, { useEffect, useState } from "react";

const BackTest = () => {
  const [datas, setDatas] = useState();

  //   useEffect(() => {
  //     const getDatas = async () => {
  //       const response = await fetch(
  //         "https://port-0-back-deploy-rm6l2llw1nx5nw.sel5.cloudtype.app/test",
  //         {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           credentials: "include",
  //         }
  //       );
  //       const datas = await response.json();
  //       return datas;
  //     };
  //     getDatas().then(setDatas);
  //     console.log(datas);
  //   }, []);
  return <div>테스트 중</div>;
};

export default BackTest;
