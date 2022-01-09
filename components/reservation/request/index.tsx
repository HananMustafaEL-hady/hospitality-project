import React from "react";

export const RequestDetails = () => {
  return (
    <section className="p-32 d-flex justify-content-center flex-column ">
      <div>
        <h3 className="title-section line-34 mb-16">
          غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة
          بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك
        </h3>
        <ul className="RequestDetails">
          <li>
            <h4>الحالة</h4>
            <div className="bg-secondary  RequestDetails__status ">
              <span className="text-white">منتهي</span>
            </div>
          </li>
          <li>
            <h4>عدد الافراد</h4>
            <div className="room-details__user-icon">
              <i className="fas fa-user"></i>
              <span> 4 </span>
            </div>{" "}
          </li>
          <li>
            <h4>من تاريخ</h4>
            <p className="title-subsection">9 November</p>
          </li>
          <li>
            <h4>الي تاريخ</h4>
            <p className="title-subsection">25 December</p>
          </li>
          <li>
            <h4>السعر الإجمالي</h4>
            <p className="RequestDetails__totalPrice">750 L.E</p>
          </li>
        </ul>
        <div>
          <h4 className="title-subsection-18 f-bold">ملاحظات</h4>
          <p className="title-subsection-18 ">
            عايز غرفة تكون هادية وبعيدة عن الدوشة وفيها كل المشتملات وتكون ليها
            بلكونة والاضائة واصلالها بشكل كويس عايز غرفة تكون هادية وبعيدة عن
            الدوشة وفيها كل المشتملات وتكون ليها بلكونة والاضائة واصلالها بشكل
            كويس عايز غرفة تكون هادية وبعيدة عن الدوشة وفيها كل المشتملات وتكون
            ليها بلكونة والاضائة واصلالها بشكل كويس .
          </p>
        </div>
      </div>
    </section>
  );
};
