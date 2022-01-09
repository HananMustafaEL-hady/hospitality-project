import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { EditRoom } from "../components/add-edit-room/edit-room";
import { EditInfo } from "../components/profile/profile-edit-information";
import { EditPassword } from "../components/profile/profile-edit-password";
// import { Col, Nav, Row, Tab } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
export const ProfileEdithoc = () => {
  return (
    <section className="container mt-32">
      <Tabs id="left-tabs-example">
        <h2 className="title-section">تعديل الحساب</h2>
        <div className="row mt-32">
          <div className="col-lg-3 col-sm-12 ">
            <TabList className="container-section section-edit-info-right p-0">
              <Tab selectedClassName="tab-selected ">
                <h2 className="font-14  m-0">البيانات الشخصية</h2>
              </Tab>
              <Tab selectedClassName="tab-selected ">
                <h2 className="font-14 m-0 "> كلمة المرور</h2>
              </Tab>
            </TabList>
          </div>
          <div className="col-lg-8 col-sm-12 container-section section-edit-info-left">
            <TabPanel>
              <EditInfo />
            </TabPanel>
            <TabPanel>
              <EditPassword />
            </TabPanel>
          </div>
        </div>
      </Tabs>
    </section>
  );
};
