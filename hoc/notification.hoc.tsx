import React, { useEffect, useState } from "react";
import { ProfileNotifications } from "../components/profile/profile-notification";
import { useNotificationsMessages } from "../hook/notifications.hook";
import InfiniteScroll from "react-infinite-scroll-component";
import { LoadingSpinner } from "../components/spinner";
import { Notificationpage } from "../models/notification.model";
interface Props {
  initialData?: Notificationpage;
}

export const NotificationHOC: React.FC<Props> = ({ initialData }) => {
  const [pageNumber, setPageNumber] = useState<number>(
    initialData ? initialData.pageCount : 1
  );
  const [notificationScroll, setnotificationScroll] = useState<any>([]);
  const [hasMore, setHasMore] = useState(true);

  const { notificationPage, isLoading, error } = useNotificationsMessages(
    pageNumber,
    initialData
  );
  console.log(
    "notificationPage, isLoading, error ",
    notificationPage,
    isLoading,
    error
  );
  // const maxPages = notificationPage
  //   ? Math.ceil(notificationPage.totalCount / notificationPage?.limit)
  //   : 0;

  useEffect(() => {
    if (notificationPage?.data && !isLoading) {
      setnotificationScroll((prevState: any) => [
        ...prevState,
        ...notificationPage.data,
      ]);
    }
    if (pageNumber == 1) {
      setHasMore(false);
    }
  }, [notificationPage]);

  return (
    <section className="container mt-32 ">
      <h2 className="title-section mb-24"> الإشعارات</h2>

      {isLoading ? <LoadingSpinner color={"green"} loading={isLoading} /> : ""}
      {notificationPage ? (
        <InfiniteScroll
          dataLength={notificationScroll.length || 0}
          style={{ overflow: "hidden" }}
          next={() => setPageNumber(pageNumber - 1)}
          hasMore={hasMore}
          loader={
            <div className="d-flex justify-content-center">
              <LoadingSpinner color={"green"} loading={isLoading} />
            </div>
          }
        >
          <ProfileNotifications notifications={notificationScroll} />
        </InfiniteScroll>
      ) : (
        ""
      )}
    </section>
  );
};
