import React from "react";
import { FilterCard } from "../components/home-filtration/filter-card";
import { RoomsCard } from "../components/room/rooms-card";
import { Selectlocation } from "../components/search-filtration/filtering/filtration-modal";
import { SortModal } from "../components/search-filtration/sort/sorting-modal";
import { Room } from "../models/inputs/Rooms";
import { useRouter } from "next/router";

interface Props {
  Rooms: [Room];
}

export const SearchResulthoc: React.FC<Props> = ({ Rooms }) => {
  const [filteringModalShow, setFilteringModalShow] = React.useState(false);
  const [sortingModalShow, setSortingModalShow] = React.useState(false);
  const router = useRouter();

  return (
    <div className="container mt-5">
      <FilterCard
        enddate={router.query.fromDate}
        startdate={router.query.toDate}
        location={router.query.location}
        count={router.query?.count}
      />
      <section className="d-flex flex-row justify-content-lg-between justify-content-md-between justify-content-sm-center  flex-wrap mt-32 align-items-center">
        <h2 className="title-section"> نتائج البحث</h2>

        <div className="justify-content-center text-center">
          <button
            className="btn btn-sm btn-outline-secondary ml-16 "
            onClick={() => setFilteringModalShow(!filteringModalShow)}
          >
            <i className="fas fa-sliders-v px-1"></i> {"  "}
            تصفية
          </button>
          <button
            className="btn btn-sm btn-outline-secondary "
            onClick={() => setSortingModalShow(!sortingModalShow)}
          >
            <i className="fas fa-sort px-1"></i>
            {"  "}
            ترتيب
          </button>
        </div>
      </section>

      <section className=" mt-5">
        <RoomsCard Rooms={Rooms} roomscol={3} />
      </section>
      <Selectlocation
        modalShow={filteringModalShow}
        setModalShow={setFilteringModalShow}
      />
      <SortModal
        modalShow={sortingModalShow}
        setModalShow={setSortingModalShow}
      />
    </div>
  );
};
