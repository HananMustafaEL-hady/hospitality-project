import React, { useState } from "react";
import { FilterCard } from "../components/home/home-filtration/filter-card";
import { RoomsCard } from "../components/room/rooms-card";
import { FiltrationModal } from "../components/search-filtration/filtering/filtration-modal";
import { SortModal } from "../components/search-filtration/sort/sorting-modal";
import { useRouter } from "next/router";
import { Roomspage } from "../models/rooms";
import { RoomsSearchHOC } from "./rooms-search.hoc";

interface Props {
  initialData?: Roomspage;
}

export const SearchResulthoc: React.FC<Props> = ({ initialData }) => {
  console.log(initialData);
  const [filteringModalShow, setFilteringModalShow] = useState(false);
  const [sortingModalShow, setSortingModalShow] = useState(false);
  const [isfiltering, setIsfiltering] = useState(false);
  const router = useRouter();

  return (
    <div className="container mt-5">
      <FilterCard
        enddate={router.query.fromDate}
        startdate={router.query.toDate}
        longitude={router.query.longitude}
        latitude={router.query.latitude}
        count={router.query?.capacity}
      />
      <section className="d-flex flex-row justify-content-lg-between justify-content-md-between justify-content-sm-center  flex-wrap mt-32 align-items-center">
        <h2 className="title-section"> نتائج البحث</h2>

        <div className="justify-content-center text-center">
          <button
            className={
              !isfiltering
                ? `btn btn-sm btn-outline-secondary ml-16 `
                : `btn btn-sm btn-outline-primary ml-16 `
            }
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
        <RoomsSearchHOC initialData={initialData} />
      </section>
      <FiltrationModal
        modalShow={filteringModalShow}
        setModalShow={setFilteringModalShow}
        setIsfiltering={setIsfiltering}
      />
      <SortModal
        modalShow={sortingModalShow}
        setModalShow={setSortingModalShow}
      />
    </div>
  );
};
